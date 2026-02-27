const prisma = require("../data/prisma");

const novoclient = async (req, res) => {
    try {
        const cliente = req.body;
        let nome = cliente.nome;
        let cpf = cliente.cpf;
        let email = cliente.email;
        let cnh = cliente.cnh;

        cpf = String(cpf);

        if (!nome) {
            return res.status(400).json({ erro: "Nome é obrigatorio" });
        }

        const palavras = nome.trim().split(" ");

        if (palavras.length < 2) {
            return res.status(400).json({
                erro: "Nome deve conter pelo menos duas palavras"
            });
        }

        if (!nome || !cpf || !email || !cnh) {
            return res.status(400).json({ erro: "Todos os campos são obrigatorios" });
        }

        cpf = cpf.replace(/\./g, "").replace(/-/g, "");

        if (isNaN(cpf)) {
            return res.status(400).json({ erro: "CPF não pode conter letras" });
        }

        if (cpf.length !== 11) {
            return res.status(400).json({ erro: "CPF deve ter 11 caracteres" });
        };

        if (!email.includes("@")) {
            return res.status(400).json({ erro: "Email deve ter @" });
        }

        if (!email.includes(".")) {
            return res.status(400).json({ erro: "Email deve ter ." });
        }

        email = email.toLowerCase();

        const emailexist = await prisma.clientes.findMany();

        const emaildupli = emailexist.some(c =>
            c.email.toLowerCase() === email
        );

        if (emaildupli) {
            return res.status(400).json({ erro: "Ja existe esse email" });
        };

        if (isNaN(cnh.split("")[0])) {
            return res.status(400).json({ erro: "CNH deve começar com número" });
        }

        const ncliente = await prisma.clientes.create({
            data: {
                nome,
                cpf,
                email,
                cnh
            }
        });
        return res.status(201).json(ncliente);


    } catch (error) {
        return res.status(500).json({ erro: "Erro interno do servidor" });
    }
};


const listarclientes = async (req, res) => {
    try {
        const clientes = await prisma.clientes.findMany();
        return res.status(200).json(clientes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao listar carros." });
    }
};


const buscarcliente = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const cliente = await prisma.clientes.findUnique({
            where: { id }
        });

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(404).json({ erro: "Cliente não encontrado" });
    }

};

const apagarcliente = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await prisma.clientes.delete({
            where: { id }
        });

        return res.status(200).json({ msg: "Excluido com sucesso" });

    } catch (error) {
        return res.status(404).json({ erro: "Cliente não encontrado" });
    }
};
const atualizarcliente = async (req, res) => {
    const id = Number(req.params.id);
    const dados = req.body;

    const cliente = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(cliente).status(200).end();
};

module.exports = {
    novoclient,
    listarclientes,
    buscarcliente,
    apagarcliente,
    atualizarcliente
}