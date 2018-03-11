import * as bodyParser from "body-parser";
import * as express from "express";
import * as serviceInjector from "../injection/serviceInjector";
import { ITag } from "../model/ITag";
import * as responseHelper from "./responseHelper";
import * as urls from "./Urls";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const tagService = serviceInjector.createTagService();

/**
 * Get tags handler
 */
router.get(urls.TAG_GET + "*", async (req, res) =>
{
    let ionRes = null;
    try
    {
        const offset = Number(req.query.offset);
        const limit = Number(req.query.limit);
        const tags = await tagService.getTags(offset, limit);
        ionRes = responseHelper.pass(tags);
    }
    catch (error)
    {
        ionRes = responseHelper.fail(error);
    }
    res.end(JSON.stringify(ionRes));
});

/**
 * Add tag handler
 */
router.post(urls.TAG_ADD, async (req, res) =>
{
    let ionRes = null;
    try
    {
        const tag = req.body;
        await tagService.addTag(tag);
        ionRes = responseHelper.pass(null);
    }
    catch (error)
    {
        ionRes = responseHelper.fail(error);
    }
    res.end(JSON.stringify(ionRes));
});

export default router;
