export default function validateSchema(schema) {
    return async (req, res, next) => {
        if (req.body.mainPhoto) {
            try {
                console.log(await req.file)
                req.body.mainPhoto = await req.file;
            } catch (err) {
                return res.status(501).send(err);
            }
        }
        console.log(req.body)
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) return res.status(422).send(
            { message: error.details.map(d => d.message) }
        );
        next();
    }
}