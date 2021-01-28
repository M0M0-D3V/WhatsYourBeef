// Import mongoose
const mongoose = require("mongoose");

// repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

// Create Region Schema
const RegionSchema = new mongoose.Schema(
    {
        nameOfRegion: String,
        description: String,
    },
    { timestamps: true }
)
const Region = mongoose.model("Region", RegionSchema)

// Create Beef Schema
const BeefSchema = new mongoose.Schema(
    {
        nameOfCut: {
            type: String,
            required: [true, requiredMsg],
            minlength: [2, minlengthMsg],
        },
        cookMethods: [String],
        notes: [String],
        region: {
            Region
        },
        imgUrls: [String]
    },
    { timestamps: true }
);

// Create model, registering BeefSchema/BeefRegionSchema and creating BeefRegionSchema when we insert to it
const Beef = mongoose.model("Beef", BeefSchema)

// Export Beef Model to be used in Controller
module.exports = {
    Beef,
    Region
}
