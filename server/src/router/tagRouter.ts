import * as bodyParser from "body-parser";
import * as express from "express";
import * as _ from "lodash";
import * as serviceInjector from "../injection/serviceInjector";
import * as responseHelper from "./responseHelper";
import * as urls from "./Urls";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const addSingleTag = async (req: express.Request, res: express.Response) =>
{
    let finalResponse = null;
    try
    {
        const tagService = serviceInjector.createTagService(req.originalUrl);
        const tag = req.body;
        await tagService.addTag(tag);
        finalResponse = responseHelper.pass(null);
    }
    catch (err)
    {
        finalResponse = responseHelper.fail(err.message);
        console.error(err);
    }
    res.end(JSON.stringify(finalResponse));
};

const editSingleTag = async (req: express.Request, res: express.Response) =>
{
    let finalResponse = null;
    try
    {
        const tagService = serviceInjector.createTagService(req.originalUrl);
        const tag = req.body;
        const tagId = Number(req.query.tagId);
        await tagService.editTag(tagId, tag);
        finalResponse = responseHelper.pass(null);
    }
    catch (err)
    {
        finalResponse = responseHelper.fail(err.message);
        console.error(err);
    }
    res.end(JSON.stringify(finalResponse));
};

const deleteSingleTag = async (req: express.Request, res: express.Response) =>
{
    let finalResponse = null;
    try
    {
        const tagService = serviceInjector.createTagService(req.originalUrl);
        const tagId = Number(req.query.tagId);
        await tagService.deleteTag(tagId);
        finalResponse = responseHelper.pass(null);
    }
    catch (err)
    {
        finalResponse = responseHelper.fail(err.message);
        console.error(err);
    }
    res.end(JSON.stringify(finalResponse));
};

// Get multiple tags for react-table - page, filter and sort parameters used for server side filtering
// Only the required tags for each table page are sent to the client
const getMultipleTags = async (req: express.Request, res: express.Response, next: express.NextFunction) =>
{
    if (req.query.pageSize && req.query.page && req.query.sorted && req.query.filtered)
    {
        let finalResponse = null;
        try
        {
            const tagService = serviceInjector.createTagService(req.originalUrl);
            const pageSize = Number(req.query.pageSize);
            const page = Number(req.query.page);
            const sorted = JSON.parse(req.query.sorted);
            const filtered = JSON.parse(req.query.filtered);
            const tagId = Number(req.query.tagId);
            const tags = await tagService.getTags(tagId);
            const filteredData = applyFilters(tags, filtered);
            const sortedData = applySorts(filteredData, sorted);
            const result = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
            };

            finalResponse = responseHelper.pass(result);
        }
        catch (err)
        {
            finalResponse = responseHelper.fail(err.message);
            console.error(err);
        }
        res.end(JSON.stringify(finalResponse));
    }
    else
    {
        next();
    }
};

function applySorts(tags: any[], sorted: any)
{
    return _.orderBy(tags, sorted.map((sort: any) =>
    {
        return (row: any) =>
        {
            if (row[sort.id] === null || row[sort.id] === undefined)
            {
                return -Infinity;
            }
            return typeof row[sort.id] === "string"
                ? row[sort.id].toLowerCase()
                : row[sort.id];
        };
    }), sorted.map((d: any) => (d.desc ? "desc" : "asc")));
}

function applyFilters(tags: any[], filtered: any)
{
    if (filtered.length)
    {
        tags = filtered.reduce((filteredSoFar: any, nextFilter: any) =>
        {
            return filteredSoFar.filter((row: any) =>
            {
                return (row[nextFilter.id] + "").includes(nextFilter.value);
            });
        }, tags);
    }
    return tags;
}

router.post(urls.TAG_ADD, addSingleTag);
router.post(urls.TAG_EDIT, editSingleTag);
router.get(urls.TAG_DELETE, deleteSingleTag);
router.get(urls.TAG_GET + "*", getMultipleTags);

router.post(urls.SERVICE_TAG_ADD, addSingleTag);
router.post(urls.SERVICE_TAG_EDIT, editSingleTag);
router.get(urls.SERVICE_TAG_DELETE, deleteSingleTag);
router.get(urls.SERVICE_TAG_GET + "*", getMultipleTags);

router.post(urls.INSPECTION_TAG_ADD, addSingleTag);
router.post(urls.INSPECTION_TAG_EDIT, editSingleTag);
router.get(urls.INSPECTION_TAG_DELETE, deleteSingleTag);
router.get(urls.INSPECTION_TAG_GET + "*", getMultipleTags);

export default router;
