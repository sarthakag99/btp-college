const mongoose = require('mongoose');

//Schema

const ClassroomSchema = new mongoose.Schema({

    title: String,
    teacherName: String,
    announcements: [
        {
            type: moongoose.Schema.Types.ObjectId,
            ref: 'Announcement'
        }
    ]
});

//Model
module.exports = mongoose.model('Classroom', ClassroomSchema);



