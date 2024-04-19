const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
// session
const sessions = require("express-session");

// controllers
// new customer
const newCustomer = require("./controllers/newCustomer");
const newCustomerGet = require("./controllers/newCustomerGet");
// login
const loginGet = require("./controllers/loginGet");
const loginPost = require("./controllers/loginPost");
// home
const homeGet = require("./controllers/homeGet");
// payment
const paymentGet = require("./controllers/paymentGet");
const paymentPost = require("./controllers/paymentPost");

// success
const successGet = require("./controllers/successGet");
const authMiddleware = require("./middleware/authMiddleware");
// logout
const logout = require("./controllers/logout");
// middlewares
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// creating a session
app.use(
  sessions({
    secret: "w3coders",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("*", (req, res, next) => {
  loggedIn = req.session.userInfo;
  console.log(loggedIn);
  next();
});
// database connection
const connectionStr =
  "mongodb+srv://sparsh:password1884@cluster0.afvsm2s.mongodb.net/";
try {
  mongoose.connect(connectionStr);
  console.log("Database Connected!");
} catch (error) {
  console.log("Database Connection Failed");
}

// customer routes
app.get("/", newCustomerGet);
app.post("/newCustomer", newCustomer);

// login routes
app.get("/login", loginGet);
app.post("/login", loginPost);

// home routes
app.get("/home", authMiddleware, homeGet);

// payment routes
app.get("/payment", paymentGet);
app.post("/payment", paymentPost);

// success routes
app.get("/success", successGet);

// logout route
app.get("/logout", logout);

app.listen(PORT, () => {
  console.log(`Application link: http://localhost:${PORT}`);
});
