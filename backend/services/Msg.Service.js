const mongoService = require('./Mongo.Service')
const ObjectId = require('mongodb').ObjectId;



function query(filter) {
    if (filter) {
        var keyWord = new RegExp(filter, 'i')
        var filterObj = {
            $or: [{ email: { $regex: keyWord } },
                  { msg: { $regex: keyWord } },
            ]
        }
        return mongoService.connect()
            .then(db => db.collection('msgs')
            .find(filterObj)
            .sort({ createdAt: -1 })
            .toArray())
    } else {
        return mongoService.connect()
            .then(db => db.collection('msgs')
            .find({})
            .sort({ createdAt: -1 })
            .toArray())
    }
}

function add(msg) {
    return mongoService.connect()
        .then(db => db.collection('msgs').insertOne(msg))
        .then(res => {
            msg._id = res.insertedId
            return msg
        })
}
function remove(postId) {
    const _id = new ObjectId(postId)
    return mongoService.connect()
        .then(db => db.collection('msgs').deleteOne({ _id }))
}
module.exports = {
    query,
    add,
    remove
}


