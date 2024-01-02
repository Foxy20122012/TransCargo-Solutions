import mysql from "serverless-mysql";

export const conn = mysql({
    config: {
        host: 'srv826.hstgr.io',
        user: 'u930882479_novaStudio',
        password: 'Merlos2012',
        port: 3306,
        database: 'u930882479_novaStudio'
    }
})