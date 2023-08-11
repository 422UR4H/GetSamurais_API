function isValid(status) {
    return status === "true" || status === "false";
}

export default function validateSchema(req, res, next) {
    const { status } = req.params;
    if (!isValid(status)) {
        return res.status(422).send({ message: "status inválido! Use 'true' ou 'false'" });
    }
    res.locals.status = (status === "true");
    next();
}