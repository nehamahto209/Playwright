import { test, request, expect } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";
import { FileUtils } from "../../src/utils/fileUtils";

test("File Download", async () => {
    const filePath = path.resolve(process.cwd(), "testdata/test_data.json");
    const image = fs.readFileSync(filePath);

    const requestContext = await request.newContext();

    const response = await requestContext.get("https://the-internet.herokuapp.com/download/sample_upload.txt", {
        headers: {
             Accept: "*/*",
            ContentType: "text/xml"
        }
    });

    console.log("Response", response);
    expect(response.ok).toBeTruthy();

    const buffer = await response.body();

    FileUtils.writeToFile("downloaded-file.pdf", buffer);

    console.log("File downloaded and saved as downloaded-file.pdf");
    await requestContext.dispose();
});
