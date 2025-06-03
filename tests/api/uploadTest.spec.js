import { test, request, expect } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

test("File Upload", async () => {
    const filePath = path.resolve(process.cwd(), "testdata/test_data.json");
    const image = fs.readFileSync(filePath);

    const requestContext = await request.newContext();

    const response = await requestContext.post("https://the-internet.herokuapp.com/upload", {
        headers: {
            Accept: "*/*",
            ContentType: "text/xml"
        },
        multipart: {
            file: {
                name: filePath,
                mimeType: "text/plain",
                buffer: image
            }
        }
    });

    console.log("Response", response);
    expect(response.ok).toBeTruthy();

    await requestContext.dispose();
});
