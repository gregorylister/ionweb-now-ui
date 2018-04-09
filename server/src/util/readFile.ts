import * as fs from "fs";

export async function readFile(filePath: string, encoding = "utf8"): Promise<string>
{
    return new Promise<string>((resolve, reject) =>
    {
        fs.readFile(filePath, encoding, (error: Error, data: string) =>
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                resolve(data);
            }
        });
    });
}
