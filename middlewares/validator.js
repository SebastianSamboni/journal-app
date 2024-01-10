export const validateModel = model => {
    return async (req, res, next) => {
        try {
            const instance = model.build(req.body)
            await instance.validate()
            next()
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
}