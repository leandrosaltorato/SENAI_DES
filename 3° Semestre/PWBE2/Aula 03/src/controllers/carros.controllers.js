const prisma = require("../data/prisma");

const novocar = async (req, res) => {
    try {
        const carro = req.body;

        let placa = carro.placa;
        let modelomarca = carro.modelo && carro.marca;
        let ano = carro.ano;

        if (!placa) {
            return res.status(400).json({ erro: "Placa é obrigatoria" });
        }

        placa = placa.trim();

        if (placa.length === 0) {
            return res.status(400).json({ erro: "Placa não pode ser vazia" });
        }

        if (placa.includes(" ")) {
            return res.status(400).json({ erro: "Placa não pode conter espaços" });
        }

        if (placa.length !== 7) {
            return res.status(400).json({ erro: "Placa deve ter 7 caracteres" });
        }

        if (placa.includes("-")) {
            return res.status(400).json({Erro: "o texto não pode conter traço"});
        }

        placa = placa.toUpperCase();

        const carrosexist = await prisma.carros.findMany();

        const placaexist = carrosexist.some(c =>
            c.placa.toUpperCase() === placa
        );

        if (placaexist) {
            return res.status(400).json({ erro: "Ja existe um carro com essa placa" });
        }



        modelomarca = modelomarca.trim();

        if (modelomarca === "") {
            return res.status(400).json({ erro: "O campo Marca e Modelo não pode estar vazio" });
        };

        // // && !ano.split("").some(c => c < "0" || c > "9" --- pra nao permitir letra soq ja esta int
        if ((ano + "").length !== 4) {
            return res.status(400).json({ erro: "Ano deve ter exatamente 4 caracteres" });
        };

        const ncarro = await prisma.carros.create({
            data: carro
        });
        return res.status(201).json(ncarro);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor" });
    }
};


const listarCarros = async (req, res) => {
    try {
        const carros = await prisma.carros.findMany();
        return res.status(200).json(carros);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao listar carros." });
    }
};


const buscarCarro = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const carro = await prisma.carros.findUnique({
            where: { id }
        });

        return res.status(200).json(carro);

    } catch (error) {
        return res.status(404).json({ erro: "Carro não encontrado" });
    }

};

const apagarCarros = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await prisma.carros.delete({
            where: { id }
        });

        return res.status(200).json({ msg: "Excluido com sucesso" });

    } catch (error) {
        return res.status(404).json({ erro: "Carro não encontrado" });
    }
};
const atualizarCarros = async (req, res) => {
    const id = Number(req.params.id);
    const dado = req.body;

    const carro = await prisma.carros.update({
        where: { id },
        data: dado
    });

    res.json(carro).status(200).end();
};

module.exports = {
    novocar,
    listarCarros,
    buscarCarro,
    apagarCarros,
    atualizarCarros
}