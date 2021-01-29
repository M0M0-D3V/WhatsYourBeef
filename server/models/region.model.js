// One Region to Many Beefs

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RegionSchema = new Schema(
    {
        // _id: Schema.Types.ObjectId,
        nameOfRegion: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        beefCuts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Beef'
            }
        ]
    },
    {timestamps: true}
)

const Region = mongoose.model('Region', RegionSchema);

module.exports = Region