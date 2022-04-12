
const errorHandler = (err, req, res, next) => {
    let errors;
    console.log(err)
    switch (err.name) {
        case "Unauthorized":
            res.status(err.code).json({ message: err.message})
            break;
            
        case "SequelizeValidationError":
            errors = err.errors.map((err)=> err.message)
            res.status(400).json({ message: errors})
        break;

        case "Forbidden" :
            res.status(err.code).json({ message: err.message})
        break;

        case "Authentication" :
            res.status(err.code).json({ message: err.message})
        break;

        case "Not Found" :
            res.status(err.code).json({ message: err.message})
        break;

        case "Invalid" :
            res.status(err.code).json({ message: err.message})
        break;

        default:
            res.status(500).json({ message: "Internal server error"})
            break;
    }
}

module.exports = errorHandler