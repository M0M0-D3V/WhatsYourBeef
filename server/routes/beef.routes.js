// Import Controller
const BeefController = require("../controllers/beef.controller")

// Exports routes to be called in server.js
module.exports = (app) => {
    app.post("/api/beef", BeefController.create);
    app.get("/api/beef", BeefController.getAll);
    app.get("/api/beef/:id", BeefController.getOne);
    app.put("/api/beef/:id/update", BeefController.update);
    app.delete("/api/beef/:id/delete", BeefController.delete);
}

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)