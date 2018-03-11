import * as Sequelize from "sequelize";

export interface IConnection
{
    getConnection: Sequelize.Sequelize;
}
