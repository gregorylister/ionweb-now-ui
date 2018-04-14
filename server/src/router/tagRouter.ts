import * as bodyParser from "body-parser";
import * as express from "express";
import * as _ from "lodash";
import * as serviceInjector from "../injection/serviceInjector";
import * as responseHelper from "./responseHelper";
import * as urls from "./Urls";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Generic add tag handler
const addSimple = async (req: express.Request, res: express.Response) =>
{
    let ionRes = null;
    try
    {
        const tagService = serviceInjector.createTagService(req.originalUrl);
        const tag = req.body;
        await tagService.addTag(tag);
        ionRes = responseHelper.pass(null);
    }
    catch (err)
    {
        ionRes = responseHelper.fail(err.message);
        console.error(err);
    }
    res.end(JSON.stringify(ionRes));
};

// Generic delete tag handler
const deleteSimple = async (req: express.Request, res: express.Response) =>
{
    let ionRes = null;
    try
    {
        const tagService = serviceInjector.createTagService(req.originalUrl);
        const tagId = Number(req.query.tagId);
        await tagService.deleteTag(tagId);
        ionRes = responseHelper.pass(null);
    }
    catch (err)
    {
        ionRes = responseHelper.fail(err.message);
        console.error(err);
    }
    res.end(JSON.stringify(ionRes));
};

// Get tags handler - uses pagination, filtering and sorting - for use with react-table
const getFilteredSorted = async (req: express.Request, res: express.Response, next: express.NextFunction) =>
{
    if (req.query.pageSize && req.query.page && req.query.sorted && req.query.filtered)
    {
        let ionRes = null;
        try
        {
            const tagService = serviceInjector.createTagService(req.originalUrl);
            const pageSize = Number(req.query.pageSize);
            const page = Number(req.query.page);
            const sorted = JSON.parse(req.query.sorted);
            const filtered = JSON.parse(req.query.filtered);
            const tagId = Number(req.query.tagId);

            const tags = await tagService.getTags(tagId);

            // Apply filters
            const filteredData = applyFilters(tags, filtered);

            // Apply sorts
            const sortedData = applySorts(filteredData, sorted);

            // Get final result
            const result = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
            };

            ionRes = responseHelper.pass(result);
        }
        catch (err)
        {
            ionRes = responseHelper.fail(err.message);
            console.error(err);
        }
        res.end(JSON.stringify(ionRes));
    }
    else
    {
        next();
    }
};

// Sorting function
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

// Filtering function
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

// Assign handlers to router
router.get(urls.TAG_GET + "*", getFilteredSorted);
router.post(urls.TAG_ADD, addSimple);
router.get(urls.TAG_DELETE, deleteSimple);

router.get(urls.SERVICE_TAG_GET + "*", getFilteredSorted);
router.post(urls.SERVICE_TAG_ADD, addSimple);
router.get(urls.SERVICE_TAG_DELETE, deleteSimple);

router.get(urls.INSPECTION_TAG_GET + "*", getFilteredSorted);
router.post(urls.INSPECTION_TAG_ADD, addSimple);
router.get(urls.INSPECTION_TAG_DELETE, deleteSimple);

export default router;
