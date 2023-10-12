const jwt = require('jsonwebtoken');

export function generateAccessToken(userId: any) {
  return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  const token = authHeader;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}
