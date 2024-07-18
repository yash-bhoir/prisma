const jwt = require('jsonwebtoken')

const getJwtToken = (userId) =>{
    return jwt.sign({userId: userId}, process.env.JWT_SECRTE, {expiresIn : '1 day'})
}

module.exports = getJwtToken;