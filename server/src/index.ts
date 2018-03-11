import * as express from "express";
import * as path from "path";
import navRouter from "./router/navRouter";
import tagRouter from "./router/tagRouter";

const app = express();
app.use(express.static(path.join(__dirname, "public"), { etag: true }));
app.use(tagRouter);
app.use(navRouter);

const port = process.env.PORT || 3001;
app.set("port", port);

app.listen(app.get("port"), () =>
{
    console.log(`ionweb ENV is ${process.env.NODE_ENV}, listening on port ${port}`);
});
