module.exports = {
    mysql: {
        database: 'music_share',
        username: "root",
        password: "root",
        info:{
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
            pool: {
            maxConnections: 5,
            maxIdleTime: 3000
        }
        }
    }
}