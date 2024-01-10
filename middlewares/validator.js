export const validateModel = model => {
    return async (req, res, next) => {
        try {
            await model.validate()
            next()
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
}