const jwt = require('jsonwebtoken');
const katakunci = process.env.SECRET


//membuat token dari payload, baca token dari paylod
const tokenPayload = (payload) => {
   return jwt.sign(payload, katakunci)
}


const readPayload = (token)=> {
    return jwt.verify(token, katakunci)
}

module.exports = {
    tokenPayload, readPayload
}