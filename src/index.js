console.clear();
const express = require("express");
const dotenv = require("dotenv");

const v1UserRouter = require("./v1/routes/UserRouter.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 8627;

app.use(express.json());
app.use("/api/v1", v1UserRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});