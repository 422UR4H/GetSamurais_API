import axios from "axios";

export async function getAddress(req, res) {
    const { cep } = req.params;
    axios.get(`http://viacep.com.br/ws/${cep}/json`)
        .then(({ data }) => res.send(data))
        .catch(({ message }) => res.status(500).send({ message }));
}