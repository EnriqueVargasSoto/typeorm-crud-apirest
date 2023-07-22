import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'loalhost',
    username: 'postgres',
    password: '1234',
    port: 5432,
    database: 'typeormdb',
    entities: [],

})