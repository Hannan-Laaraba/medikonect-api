import jwt from "jsonwebtoken";

// Secret key for signing and verifying tokens (keep this secret!)
const secretKey = 'your_secret_key';

// Function to generate a JWT token for the user
function generateToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

// Function to verify the token
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}

module.exports = { generateToken, verifyToken };
