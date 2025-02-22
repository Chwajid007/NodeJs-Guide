const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


const rootDir = require("./utils/helper");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin',adminRouter.routes)
app.use(shopRouter)
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page Not Found</h1>");
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);

console.log("Listening on port 3000...");
