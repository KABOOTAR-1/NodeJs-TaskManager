const notfound = (req, res) => {
  res.status(404).send("Route doesnt exsist");
};

module.exports = notfound;
