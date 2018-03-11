import * as express from "express";
import * as path from "path";
import { readFile } from "../util/readFile";

const router = express.Router();

/**
 * Main get handler - captures all paths and returns the html template
 */
router.get("/*", async (req, res) =>
{
    try
    {
        const templatePath = "../public/ionweb.html";
        const htmlTemplate = await readFile(path.join(__dirname, templatePath));
        res.send(htmlTemplate);
    }
    catch (error)
    {
        console.error(error.stack);
        res.status(500).end("500 - Internal Error");
    }
});

export default router;
