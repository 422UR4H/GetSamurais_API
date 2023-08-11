import {
    createFeedbackDB,
    getFeedbackByIdDB,
    getFeedbacksByUserDB,
    getFeedbacksByServiceDB,
    updateFeedbackDB,
    deleteFeedbackDB
} from "../repository/feedback.repository.js";


export async function createFeedback(req, res) {
    const { feedback, stars } = req.body;
    const { id } = res.locals.user;
    try {
        const result = await createFeedbackDB(feedback, stars, id);
        if (result.rowCount === 0) {
            return res.status(409).send({
                message: "Não foi possível enviar esta avaliação neste momento!"
            });
        }
        res.sendStatus(201);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getFeedbacksByService(req, res) {
    const { id } = req.params;
    try {
        const result = await getFeedbacksByServiceDB(id);
        res.send({ feedbacks: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getFeedbacksByUser(req, res) {
    const { id } = req.params;
    try {
        const result = await getFeedbacksByUserDB(id);
        res.send({ feedbacks: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updateFeedback(req, res) {
    const { feedback } = req.body;
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await updateFeedbackDB(feedback, id, user.id);

        if (result.rowCount === 0) {
            if ((await getFeedbackByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Esta avaliação não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function deleteFeedback(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await deleteFeedbackDB(id, user.id);

        if (result.rowCount === 0) {
            if ((await getFeedbackByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este avaliação não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}