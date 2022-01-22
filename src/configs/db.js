const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb://amant:amant@cluster0-shard-00-00.ujj43.mongodb.net:27017,cluster0-shard-00-01.ujj43.mongodb.net:27017,cluster0-shard-00-02.ujj43.mongodb.net:27017/Tanishq?ssl=true&replicaSet=atlas-9suh91-shard-0&authSource=admin&retryWrites=true&w=majority");
}