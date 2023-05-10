const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("You aren't authenticated!!");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token isnot valid");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};

module.exports = {
  verifyToken,
};
