import * as Sequelize from "sequelize";
import { IConnection } from "./IConnection";

export default class MSSQLConnectionImpl implements IConnection
{
    private readonly sequelize: any;

    constructor()
    {
        this.sequelize = new Sequelize(
            "test_iontag_v1",
            "iontag@test-iontag",
            "Pass1234!",
            {
                dialect: "mssql",
                dialectOptions:
                {
                    encrypt: true,
                },
                host: "test-iontag.database.windows.net",
                pool:
                {
                    idle: 10000,
                    max: 5,
                    min: 0,
                },
                port: 1433,
            },
        );
    }

    public get getConnection(): Sequelize.Sequelize
    {
        return this.sequelize;
    }
}
