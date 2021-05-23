const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const announcementSchema=mew.mongoose.Schema(
    {
        author:String,
        body:String,
        date: {
            type: String,
            default: Date()
        },
        classroom: {
            type: ObjectId,
            ref: 'Classroom',
          },

    }
);
module.exports = mongoose.model('Announcement', announcementSchema);
