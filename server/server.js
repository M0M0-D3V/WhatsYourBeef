const express = require("express");
const app = express();

// Allow use of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adjust port and mongo db with these helper variables
const port = 9001;
const db_name = "beefdb";

// Import and activate cors
const cors = require("cors");
app.use(cors());

// Import configs with db name
require("./config/mongoose.config")(db_name);

// Import routes function and execute
require("./routes/beef.routes")(app);

// Helper print to make sure port was activated
app.listen(port, () => console.log(`Server is listening on port ${port}`));