/**
 * Created by li on 2017/9/12.
 */

const app = require('./app');
const connectDatabase = require('./db/index');
const dbConfig = require('./config/index');
const mongoos = require('mongoose');
mongoos.Promise = global.Promise;
const port = "8080";

(async () => {
    try {
        const info = await connectDatabase(dbConfig.mongo.url);
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    } catch (error) {
        console.log('Unable to connect to database');
    }
    await app.listen(port);
    console.log(`Server started on port ${port}`);
})();
