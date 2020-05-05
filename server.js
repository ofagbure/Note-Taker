const express = require("express");
const APIroutes = require("./routes/APIroutes");
const htmlRoutes = require("./routes/htmlRoutes");


const app = express();
const port = server.listen(process.env.PORT || 3000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", APIroutes);
app.use("/", htmlRoutes);


app.listen(port, function () {
    console.log(`Listening on PORT: ${port}`)
});
