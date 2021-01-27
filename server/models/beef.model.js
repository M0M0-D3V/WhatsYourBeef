// Import mongoose
const mongoose = require("mongoose");

// repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

// Create Beef Schema

const BeefRegionSchema = new mongoose.Schema(
    {
        nameOfRegion: {
            type: String
        },
        description: {
            type: String
        },
        
    },
    { timestamps: true }
    
    )
const BeefSchema = new mongoose.Schema(
    {
        nameOfCut: {
            type: String,
            required: [true, requiredMsg],
            minlength: [2, minlengthMsg],
        },
        region: BeefRegionSchema,
        cookMethods: [String],
        notes: [String],
    },
    { timestamps: true }
);

// Create model, registering BeefSchema/BeefRegionSchema and creating BeefRegionSchema when we insert to it
const Beef = mongoose.model("Beef", BeefSchema)

// Export Beef Model to be used in Controller
module.exports = Beef;