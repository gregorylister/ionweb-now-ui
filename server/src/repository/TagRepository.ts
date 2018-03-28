import { IConnection } from "./IConnection";
import { tagInspectionTableDefinition } from "./tableDefinition";
import { tagServiceTableDefinition } from "./tableDefinition";
import { tagTableDefinition } from "./tableDefinition";

export default class TagRepository
{
    private readonly tagTable: any;

    constructor(private readonly url: string, private readonly connection: IConnection)
    {
        let tableName = null;
        let tableDefinition = null;
        const tableRoute = url.split("/");
        switch (tableRoute[1])
        {
            case "tag":
                tableName = "tag";
                tableDefinition = tagTableDefinition;
                break;
            case "servicetag":
                tableName = "tag_service";
                tableDefinition = tagServiceTableDefinition;
                break;
            case "inspectiontag":
                tableName = "tag_inspection";
                tableDefinition = tagInspectionTableDefinition;
                break;
        }

        if (tableName && tableDefinition)
        {
            this.tagTable = this.connection.getConnection.define(
                tableName,
                tableDefinition,
                { freezeTableName: true, timestamps: false},
            );
        }
        else
        {
            throw new Error("Unable to parse URL...");
        }
    }

    public async addTag(tag: any): Promise<void>
    {
        await this.tagTable.sync();
        await this.tagTable.create(tag);
    }

    public async getTags(offset: number, limit: number): Promise<any[]>
    {
        let tags = [];
        if (offset < 0 || limit < 0)
        {
            tags = await this.tagTable.findAll();
        }
        else
        {
            tags = await this.tagTable.findAll({ offset, limit });
        }
        return tags;
    }
}
