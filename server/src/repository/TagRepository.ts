import { Sequelize } from "sequelize";
import { IConnection } from "./IConnection";
import { tagInspectionTableDefinition } from "./tableDefinition";
import { tagServiceTableDefinition } from "./tableDefinition";
import { tagTableDefinition } from "./tableDefinition";

export default class TagRepository
{
    private readonly tagTable: Sequelize["Model"];
    private readonly tableRoute: string;

    constructor(private readonly url: string, private readonly connection: IConnection)
    {
        let tableName = null;
        let tableDefinition = null;
        this.tableRoute = url.split("/")[1];
        switch (this.tableRoute)
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
                {freezeTableName: true, timestamps: false},
            );
        }
        else
        {
            throw new Error("Unable to parse URL...");
        }
    }

    public async addTag(tag: any): Promise<void>
    {
        // await this.tagTable.sync();
        await this.tagTable.create(tag);
    }

    public async getTags(tagId: number): Promise<any[]>
    {
        // await this.tagTable.sync();
        let tags = [];
        if (this.tableRoute === "tag")
        {
            tags = await this.tagTable.findAll();
        }
        else
        {
            tags = await this.tagTable.findAll({where: {tag_id: tagId}});
        }
        return tags;
    }

    public async deleteTag(tagId: number): Promise<void>
    {
        // await this.tagTable.sync();
        if (this.tableRoute === "tag")
        {
            await this.tagTable.destroy({where: {id: tagId}});
        }
    }
}
