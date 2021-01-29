// Import mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

// Create Beef Schema
const BeefSchema = new Schema(
    {
        nameOfCut: {
            type: String,
            required: [true, requiredMsg],
            minlength: [2, minlengthMsg],
        },
        cookMethods: [String],
        notes: [String],
        imgUrls: [String],
        region: {
            type: Schema.Types.ObjectId,
            ref: 'Region'
        },
    },
    { timestamps: true }
)

// const RegionSchema = new Schema(
//     {
//         nameOfRegion: String,
//         description: String,
//         beefCuts: [
//             BeefSchema
//         ]
//     },
//     {timestamps: true}
// )

// Create model, registering BeefSchema/BeefRegionSchema and creating BeefRegionSchema when we insert to it
const Beef = mongoose.model('Beef', BeefSchema)

// Export Beef Model to be used in Controller
module.exports = Beef
