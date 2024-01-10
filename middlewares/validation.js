export const handleModelErrors = model => async (req, res, next) => {
    try {
        await model.create(req.body)
        next()
    } catch (error) {
        console.error(error)
        if (
            error.name === 'SequelizeValidationError' ||
            error.name === 'SequelizeUniqueConstraintError'
        ) {
            let errors = []
            
            if (error.name === 'SequelizeUniqueConstraintError') {
                errors.push({message: error.original.detail})
            }
            else {
                errors = error.errors.map(err => ({
                    message: err.message
                }));
            }

            return res.status(400).json({ error: 'Error de validación', errors })
        }

        next(error);
    }
}