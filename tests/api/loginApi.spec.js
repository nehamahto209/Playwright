import { test, request } from "@playwright/test";
import { FileUtils } from "../../src/utils/fileUtils";

import 'dotenv-expand/config';

test('Login and save response to JSON file', async () => {
    const requestContext = await request.newContext();
    const credentials = {
        email: process.env.API_EMAIL,
        password:process.env.API_PWD ,
    };

   const response = await requestContext.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        data: credentials
    });
    const responseBody = await response.json();
    console.log(responseBody);
    FileUtils.writeToFile("loginResponse",JSON.stringify(responseBody, null, 2));
});
