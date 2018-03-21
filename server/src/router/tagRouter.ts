import * as bodyParser from "body-parser";
import * as express from "express";
import * as _ from "lodash";
import * as serviceInjector from "../injection/serviceInjector";
import { ITag } from "../model/ITag";
import * as responseHelper from "./responseHelper";
import * as urls from "./Urls";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const tagService = serviceInjector.createTagService();

 // Get tags handler - uses pagination, filtering and sorting - for use with react-table
const getFilteredSorted = async (req: express.Request, res: express.Response, next: express.NextFunction) =>
{
    if (req.query.pageSize && req.query.page && req.query.sorted && req.query.filtered)
    {
        let ionRes = null;
        try
        {
            const pageSize = Number(req.query.pageSize);
            const page = Number(req.query.page);
            const sorted = JSON.parse(req.query.sorted);
            const filtered = JSON.parse(req.query.filtered);

            let tags = await tagService.getTags(-1, -1);

            // Apply filters
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

            // Apply sorts
            const sortedData = _.orderBy(
                tags,
                sorted.map((sort: any) =>
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
                }),
                sorted.map((d: any) => (d.desc ? "desc" : "asc"))
            );

            const result = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(tags.length / pageSize)
            };

            ionRes = responseHelper.pass(result);
        }
        catch (error)
        {
            ionRes = responseHelper.fail(error);
        }
        res.end(JSON.stringify(ionRes));
    }
    else
    {
        next();
    }
};

 // Generic get tags handler - uses offset and limit
const getWithOffset = async (req: express.Request, res: express.Response, next: express.NextFunction) =>
{
    if (req.query.offset && req.query.limit)
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
    }
    else
    {
        next();
    }
};

router.get(urls.TAG_GET + "*", getFilteredSorted, getWithOffset);

// Generic add tag handler
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
