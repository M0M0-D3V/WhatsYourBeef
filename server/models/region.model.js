// Import mongoose
const mongoose = require("mongoose");

// repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

const BeefRegionSchema = new mongoose.Schema(
    {
        nameOfRegion: {
            type: String
        },
        description: {
            type: String
        },
        cuts: [
            BeefSchema
        ]
    },
    { timestamps: true }
    
);

// Create model, registering BeefSchema/BeefRegionSchema and creating BeefRegionSchema when we insert to it
const Region = mongoose.model("Region", BeefRegionSchema)

// Export Beef Model to be used in Controller
module.exports = Beef;