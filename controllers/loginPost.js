const customerModel = require("../models/customerModel");
module.exports = async (req, res) => {
  const { email, password } = req.body;
  const emailId = await customerModel.findOne({ customerEmail: email });
  const passwordVal = await customerModel.findOne({
    customerPassword: password,
  });
  try {
    if (!emailId) {
      console.log("Please sign up first");
      res.render("login", { msg: "Invalid Username" });
    } else if (!passwordVal) {
      console.log("Invalid Password");
      res.render("login", { msg: "Invalid Password" });
    } else {
      req.session.userInfo = {
        userID: emailId._id,
      };

      console.log("Login Successful");
      res.redirect("/home");
    }
  } catch (error) {
    console.log(error);
  }
};
