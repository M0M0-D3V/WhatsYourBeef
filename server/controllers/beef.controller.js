// Import model
const Beef = require("../models/beef.model")
const Region = require("../models/region.model")

// Export functions to be called in Routes
module.exports = {
    // Create: Create one Beef
    create(req, res) {
        Beef.create(req.body)
        .then((beef) => res.json(beef))
        .catch((err) => res.status(400).json(err));
    },
        // Create: Create one Beef Cut
    createCut(req, res) {
        console.log(req.body.beefCuts.nameOfCut)
        Beef.findByIdAndUpdate(req.params.id,
            {
                $push: {beefCuts: {nameOfCut: req.body.beefCuts.nameOfCut}
                }},
            {
                runValidators: true,
                new: true,
                useFindAndModify: false
            }
        )
        .then((updatedRegion) => res.json(updatedRegion))
        .catch((err) =>res.status(400).json(err));
    },

    // Read: Get all Beef
    getAll(req, res) {
        // Blank .find param gets all
        Beef.find()
        .then((beefs) => res.json(beefs))
        .catch((err) => res.status(400).json(err));
    },

    // Read: Get 1 Beef by ID
    getOne(req, res) {
        Beef.findById({ _id: req.params.id })
        // .populate('region')
        .then((beef) => res.json(beef))
        .catch((err) => res.status(400).json(err));
    },

    // Update: Update one Beef by Id, rerunning validators on any changed fields
    update(req, res) {
        console.log(req.body)
        Beef.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((updatedBeef) => res.json(updatedBeef))
        .catch((err) =>res.status(400).json(err));
    },

    // Delete: Delete One Beef By Id
    delete(req, res) {
        Beef.findByIdAndDelete(req.params.id)
        .then((deleteBeef) => res.json(deleteBeef))
        .catch((err) => res.status(400).json(err));
    },

    // Create: Create one Region
    createRegion(req, res) {
        console.log(req.body)
        Region.create(req.body)
        .then((region) => res.json(region))
        .catch((err) => res.status(400).json(err));
    },

    // Read: Get all BeefRegions
    getAllRegions(req, res) {
        // Blank .find param gets all
        Region.find()
        // .populate('beefCuts')
        .then((region) => res.json(region))
        .catch((err) => res.status(400).json(err)); 
    },
}

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
    // MODEL.MONGOOSE_FUNCTION(PARAMS)
    // .then(VAR => res.json({MODEL: VAR}))
    // catch(err => res.json(err))
// }