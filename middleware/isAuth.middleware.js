import jwt from 'jsonwebtoken';

const isAuth =  async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({ message: 'No token, authorization denied' });
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(403).json({ message: 'Token is invalid, authorization denied' });
        }
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
    }
}

export default isAuth;