import { Sequelize } from "sequelize";
import { IConnection } from "./IConnection";
import { tagInspectionTableDefinition } from "./tableDefinition";
import { tagServiceTableDefinition } from "./tableDefinition";
import { tagTableDefinition } from "./tableDefinition";

export default class TagRepository
{
    private readonly tagTable: Sequelize["Model"];
    private readonly tagServiceTable: Sequelize["Model"];
    private readonly tagInspectionTable: Sequelize["Model"];
    private readonly tableRoute: string;
    private readonly initTablesFlag: boolean = false;

    constructor(private readonly url: string, private readonly connection: IConnection)
    {
        this.tableRoute = url.split("/")[1];
        this.tagTable = this.connection.getConnection.define(
            "tag",
            tagTableDefinition,
            {freezeTableName: true, timestamps: false},
        );
        this.tagServiceTable = this.connection.getConnection.define(
            "tag_service",
            tagServiceTableDefinition,
            {freezeTableName: true, timestamps: false},
        );
        this.tagInspectionTable = this.connection.getConnection.define(
            "tag_inspection",
            tagInspectionTableDefinition,
            {freezeTableName: true, timestamps: false},
        );

        if (this.initTablesFlag)
        {
            this.initTables();
        }
    }

    public async addTag(tag: any): Promise<void>
    {
        switch (this.tableRoute)
        {
            case "tag":
                await this.tagTable.create(tag);
                break;
            case "servicetag":
                await this.tagServiceTable.create(tag);
                break;
            case "inspectiontag":
                await this.tagInspectionTable.create(tag);
                break;
        }
    }

    public async editTag(tagId: number, tag: any): Promise<void>
    {
        switch (this.tableRoute)
        {
            case "tag":
                await this.tagTable.update(tag, {where: {id: tagId}});
                break;
            case "servicetag":
                await this.tagServiceTable.update(tag, {where: {tag_id: tagId}});
                break;
            case "inspectiontag":
                await this.tagInspectionTable.update(tag, {where: {tag_id: tagId}});
                break;
        }
    }

    public async getTags(tagId: number): Promise<any[]>
    {
        let tags = [];
        switch (this.tableRoute)
        {
            case "tag":
                tags = await this.tagTable.findAll();
                break;
            case "servicetag":
                tags = await this.tagServiceTable.findAll({where: {tag_id: tagId}});
                break;
            case "inspectiontag":
                tags = await this.tagInspectionTable.findAll({where: {tag_id: tagId}});
                break;
        }
        return tags;
    }

    public async deleteTag(tagId: number): Promise<void>
    {
        switch (this.tableRoute)
        {
            case "tag":
                await this.tagTable.destroy({where: {id: tagId}});
                await this.tagServiceTable.destroy({where: {tag_id: tagId}});
                await this.tagInspectionTable.destroy({where: {tag_id: tagId}});
                break;
            case "servicetag":
                await this.tagServiceTable.destroy({where: {id: tagId}});
                break;
            case "inspectiontag":
                await this.tagInspectionTable.destroy({where: {id: tagId}});
                break;
        }
    }

    private async initTables()
    {
        await this.tagTable.sync({force: true});
        await this.tagServiceTable.sync({force: true});
        await this.tagInspectionTable.sync({force: true});
    }
}
