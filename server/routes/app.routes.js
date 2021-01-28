// Import Controller
const BeefController = require("../controllers/beef.controller")
const RegionController = require("../controllers/region.controller")

// Exports routes to be called in server.js
module.exports = (app) => {
    // beef
    app.post("/api/beef", BeefController.create);
    app.get("/api/beef", BeefController.getAll);
    app.get("/api/beef/:id", BeefController.getOne);
    app.put("/api/beef/:id/update", BeefController.update);
    app.delete("/api/beef/:id/delete", BeefController.delete);

    // region
    app.post("/api/beef", BeefController.create);
    app.get("/api/beef", BeefController.getAll);
    app.get("/api/beef/:id", BeefController.getOne);
    app.put("/api/beef/:id/update", BeefController.update);
    app.delete("/api/beef/:id/delete", BeefController.delete);
}

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)