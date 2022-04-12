const bcrypt = require('bcrypt');

const hashPass = (plainext) => {
    return bcrypt.hashSync(plainext, 10)
};

const comparePass = (password, hash)=> {
    return bcrypt.compareSync(password, hash)
} 

module.exports = { hashPass, comparePass }