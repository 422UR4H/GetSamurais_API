import {
    createCommentDB,
    getCommentByIdDB,
    getCommentsByUserDB,
    getCommentsByFeedbackDB,
    updateCommentDB,
    deleteCommentDB
} from "../repository/comment.repository.js";


export async function createComment(req, res) {
    const { comment } = req.body;
    const { id } = res.locals.user;
    try {
        const result = await createCommentDB(comment, id);
        if (result.rowCount === 0) {
            return res.status(409).send({
                message: "Não foi possível enviar este comentário neste momento!"
            });
        }
        res.sendStatus(201);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getCommentsByUser(req, res) {
    const { id } = req.params;
    try {
        const result = await getCommentsByUserDB(id);
        res.send({ comments: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getCommentsByFeedback(req, res) {
    const { id } = req.params;
    try {
        const result = await getCommentsByFeedbackDB(id);
        res.send({ comments: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updateComment(req, res) {
    const { comment } = req.body;
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await updateCommentDB(comment, id, user.id);

        if (result.rowCount === 0) {
            if ((await getCommentByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este comentário não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function deleteComment(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await deleteCommentDB(id, user.id);

        if (result.rowCount === 0) {
            if ((await getCommentByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este comentário não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}