import { DataSource, DataSourceOptions } from "typeorm";
import {config as dotenvConfig } from  'dotenv'
import { registerAs } from "@nestjs/config";

dotenvConfig({path: '.env.development'});

const config = {
    type: 'mysql',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: false,  //estaba false ,  si se pone en true hace los cambios a la base de datos en cuanto detecta un cambio a una tabla
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.js, .ts}'] 
}

export default registerAs('typeorm', ()=> config )

export const connectionSource = new DataSource(config as DataSourceOptions)