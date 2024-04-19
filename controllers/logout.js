module.exports = (req, res) => {
    req.session.destroy(() => {
        console.log("User Logged Out");
        res.redirect("/login");
    })
}