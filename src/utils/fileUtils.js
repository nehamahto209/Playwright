import * as fs from "fs";
import * as path from "path";

export class FileUtils {
    static async writeToFile(fileName, dataToWrite) {
        const dir = path.join(process.cwd(), 'testdata');

        // Create the directory if it doesn't exist
        fs.mkdirSync(dir, { recursive: true });

        // Ensure the file name is provided
        if (!fileName) {
            throw new Error('File name must be provided');
        }

        // Construct and return the full file path
        const filePath =  path.join(dir, fileName);
        fs.writeFileSync(filePath, JSON.stringify(dataToWrite, null, 2));
        console.log(`Data saved to ${filePath}`);
    }   
    
    static async readFromFile(fileName)
    {
        try {
            const dir = path.join(process.cwd(), 'testdata');

        // Create the directory if it doesn't exist
        fs.mkdirSync(dir, { recursive: true });

        // Ensure the file name is provided
        if (!fileName) {
            throw new Error('File name must be provided');
        }

        // Construct and return the full file path
        const filePath =  path.join(dir, fileName);

            const data = fs.readFileSync(filePath);
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            return jsonData;
        } catch (err) {
            console.error('Error reading or parsing the file:', err);
        }
    }   
}
