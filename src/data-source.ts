import { DataSource } from 'typeorm'
import { City } from './db/entities/City';
import { Account } from './db/entities/Account';
import { Contact } from './db/entities/Contact';
import { HelpRequest } from './db/entities/HelpRequest';
import { NGO } from './db/entities/NGO';
import { SupportSubject } from './db/entities/SupportSubject';
import { User } from './db/entities/User';
import { Log } from './db/entities/Log';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "TESTPASS",
    database: "postgres",
    logging: true,
    entities: [City, Account, Contact, HelpRequest, NGO, SupportSubject, User, Log],
    subscribers: [],
    migrations: [],
    applicationName: 'guvenagi',
    dropSchema: true,
    synchronize: false,
    schema: "general"

})