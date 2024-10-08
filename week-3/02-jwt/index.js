const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

function signJwt(username, password) {
  // Your code here

  const emailSchema = z.string().email();
  const passwordSchema = z.string().min(6);

  const safeUsername = emailSchema.safeParse(username);
  const safePassword = passwordSchema.safeParse(password);

  if (!safeUsername.success || !safePassword.success) {
    return null;
  }

  var token = jwt.sign({ username: username }, password);

  return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here

  try {
    const verifiedJwt = jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  // Your code here
  // const userToken = req.headers.authorization;

  const decodedJWT = jwt.decode(token);

  if (!decodedJWT) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
