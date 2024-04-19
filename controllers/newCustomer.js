const customerModel = require("../models/customerModel");
module.exports = async(req, res) => {
    const {name, email, password, street, city, zip, country} = req.body;
    const idstr = "id" + Math.random().toString(16).slice(2)
           customerModel.create({
            customerId: idstr,
            customerName: name,
            customerEmail: email,
            customerPassword: password,
            billingAddress: {
                street: street,
                city: city,
                zip: zip,
                country: country
            }
           }).then((error) => {console.log(error)});
           res.redirect("/login");
}