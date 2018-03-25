import { ITag } from "../model/ITag";
import { IConnection } from "./IConnection";
import { tagInspectionTableDefinition, tagInspectionTableName } from "./tableDefinition";
import { tagServiceTableDefinition, tagServiceTableName } from "./tableDefinition";
import { tagTableDefinition, tagTableName } from "./tableDefinition";

export default class TagRepository
{
    private readonly tagTable: any;

    constructor(private readonly connection: IConnection)
    {
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
