#!/usr/bin/env node


import archiver from "archiver";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { Readable } from "stream";
import { ApiValidationSummary, Transformation } from "./sdks/apimatic-api/src";
import { ExportFormats } from "./sdks/apimatic-api/src/models/exportFormats.js";
const {TransformationController}  = require("./sdks/apimatic-api/src/controllers/transformationController.js");
const { Client, ApiError, ContentType, FileWrapper } = require("./sdks/apimatic-api/src/index.js");

// Constants
const USER_AGENT = "apimatic-validator-mcp/1.0";
const APIMATIC_API_KEY = process.env.APIMATIC_API_KEY;

if (!APIMATIC_API_KEY) {
  console.error("Missing APIMATIC_API_KEY. Please set the environment variable.");
  process.exit(1);
}

// MCP Server Initialization
const server = new McpServer({
  name: "APIMatic Validator MCP",
  version: "1.0.0",
});

/**
 * Creates a ZIP file containing the OpenAPI specification and metadata.
 */
async function createZipFile(openApiContent: string, isYaml: boolean): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const archive = archiver("zip", { zlib: { level: 9 } });
    const buffers: Buffer[] = [];

    archive.on("data", (chunk) => buffers.push(chunk));
    archive.on("end", () => resolve(Buffer.concat(buffers)));
    archive.on("error", (err) => reject(err));

    archive.append(openApiContent, { name: `openapi.${isYaml ? "yaml" : "json"}` });

    const metaContent = JSON.stringify({ ImportSettings: { UseStrictValidation: true } });
    archive.append(metaContent, { name: "APIMATIC-META.json" });

    archive.finalize();
  });
}

/**
 * Sends a validation request to APIMatic API.
 */
async function makeApimaticValidationRequest<T>(openApiFile: string, isYaml: boolean): Promise<T | []> {
  try {
    const zipBuffer = await createZipFile(openApiFile, isYaml);
    const fileStream = Readable.from(zipBuffer);
    const file = new FileWrapper(fileStream, { filename: "api-spec.zip", contentType: "application/zip" });

    const sdkClient = new Client({
      timeout: 0,
      authorization: `X-Auth-Key ${APIMATIC_API_KEY}`,
      USER_AGENT: USER_AGENT,
    });

    const apiTransformationController = new TransformationController(sdkClient);
    const { result } = await apiTransformationController.transformViaFile(ContentType.EnumMultipartformdata, file, ExportFormats.APIMATIC);

    return (result as Transformation).importSummary as T;
  } catch (error: any) {
    if (error instanceof ApiError) {
      //console.error("APIMatic API Error:", error.result);
      return error.result as T;
    }
    //console.error("Unexpected Error:", error);
    throw error;
  }
}

// MCP Server Tool Definition
server.tool(
  "validate-openapi-using-apimatic",
  "Get validation summary for your OpenAPI spec using APIMatic",
  {
    openApiFile: z.string().describe("The OpenAPI file content as a string"),
    isYaml: z.boolean().describe("Whether the OpenAPI file is in YAML format"),
  },
  async ({ openApiFile, isYaml }) => {
    const validationData = await makeApimaticValidationRequest<ApiValidationSummary>(openApiFile, isYaml);

    return {
      content: [{ type: "text", text: validationData ? JSON.stringify(validationData) : "Failed to retrieve validation data" }],
    };
  }
);

/**
 * Main function to initialize the MCP server.
 */
async function main() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("APIMatic Validation MCP Server running on stdio");
  } catch (error) {
    console.error("Fatal error in main():", error);
    process.exit(1);
  }
}

main();
