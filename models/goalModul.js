const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    text: {
        type: String,
        require: [true, "pleace add text value"]
    },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Goal', goalSchema)