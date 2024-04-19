module.exports = (req, res) => {
  // Access query parameters
  const name = req.query.name;
  const price = req.query.price;
  const color = req.query.color;



  res.render("payment", { name, price, color });
};
