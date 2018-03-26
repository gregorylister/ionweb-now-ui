import { ITag } from "../model/tagInterface";
import { IConnection } from "./IConnection";
import { tagInspectionTableDefinition } from "./tableDefinition";
import { tagServiceTableDefinition } from "./tableDefinition";
import { tagTableDefinition } from "./tableDefinition";

export default class TagRepository
{
    private readonly tagTable: any;

    constructor(private readonly url: string, private readonly connection: IConnection)
    {
        let tagTableName = "";
        switch (url)
        {
            case "/tag/get" || "/tag/add":
                tagTableName = "tag";
                break;
            case "/servicetag/get" || "/servicetag/add":
                tagTableName = "tag_service";
                break;
            default:
                tagTableName = "tag";
        }

        this.tagTable = this.connection.getConnection.define(
            tagTableName,
            tagTableDefinition,
            { freezeTableName: true, timestamps: false},
        );
    }

    public async addTag(tag: ITag): Promise<void>
    {
        await this.tagTable.sync();
        await this.tagTable.create(tag);
    }

    public async getTags(offset: number, limit: number): Promise<ITag[]>
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
