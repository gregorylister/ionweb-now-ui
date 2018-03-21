import { ITag } from "../model/ITag";
import { TagInspectionTableDefinition, tagInspectionTableName } from "./dbModel/TagInspectionTableDefinition";
import { TagServiceTableDefinition, tagServiceTableName } from "./dbModel/TagServiceTableDefinition";
import { TagTableDefinition, tagTableName } from "./dbModel/TagTableDefinition";
import { IConnection } from "./IConnection";

export default class TagRepository
{
    private readonly tagTable: any;

    constructor(private readonly connection: IConnection)
    {
        this.tagTable = this.connection.getConnection.define(
            tagTableName,
            TagTableDefinition,
            { freezeTableName: true },
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
