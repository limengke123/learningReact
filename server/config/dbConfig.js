/**
 * Created by li on 2017/9/14.
 */
const dbConfig = {
    mongoHome:{
        url:"mongodb://localhost:27017/testDB"
    },
    mongo:{
        url:"mongodb://localhost:27017/testdb1",
        jwt:{
            secret:"tomIsCat"
        }
    },
};

module.exports = dbConfig;