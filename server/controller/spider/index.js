/**
 * Created by li on 2017/9/1.
 */
const {segementfaultBlogs,segementfaultDetailPage} = require('./segement');
const {dytt,detailPage} = require('./dytt');
module.exports = {
    segementfault:{
        segementfaultBlogs,
        segementfaultDetailPage,
    },
    DYTT:{
        dytt,
        detailPage,
    },
};







