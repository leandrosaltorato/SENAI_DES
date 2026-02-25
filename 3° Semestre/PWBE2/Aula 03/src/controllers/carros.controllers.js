const prisma = require("../data/prisma");

const novocar = async (req, res) => {
    try {
        const carro = req.body;

        let placa = carro.placa;
        let modelomarca = carro.modelo && carro.marca;
        let ano = carro.ano;

        if (!placa) {
            return res.status(400).json({ erro: "Placa é obrigatória." });
        }

        placa = placa.trim();

        if (placa.length === 0) {
            return res.status(400).json({ erro: "Placa não pode ser vazia." });
        }

        if (placa.includes(" ")) {
            return res.status(400).json({ erro: "Placa não pode conter espaços." });
        }

        if (placa.length !== 7) {
            return res.status(400).json({ erro: "Placa deve ter exatamente 7 caracteres." });
        }

        placa = placa.replace("-", "");
        placa = placa.toUpperCase();

        carro.placa = placa;

        modelomarca = modelomarca.trim();

        if (modelomarca === "") {
            return res.status(400).json({ erro: "O campo Marca e Modelo não pode estar vazio." });
        };

        //FALTA PRIMEIRA LETRA MAIUSCULA

        ano = String(ano);

        // // && !ano.split("").some(c => c < "0" || c > "9" --- Para não permitir letra
        if (ano.length !== 4) {
            return res.status(400).json({ erro: "Ano deve ter exatamente 4 caracteres." });
        };

        const ncarro = await prisma.carros.create({ 
            data: carro 
        }); 
        return res.status(201).json(ncarro);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
};


// const listarCarros = async (req, res) => {
//     try {
//         const carros = await prisma.carros.findMany();
//         return res.status(200).json(carros);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ erro: "Erro ao listar carros." });
//     }
// };


// const buscarCarro = async (req, res) => {
//     const { id } = req.params;

//     const turma = await prisma.turmas.findUnique({
//         where: { id },
//         include: {
//             alunos: true
//         }
//     });

//     res.json(turma).status(200).end();
// };

// const apagarTurma = async (req, res) => {
//     const { id } = req.params;

//     const turma = await prisma.turmas.delete({
//         where: { id }
//     });

//     res.json(turma).status(200).end();
// };

// const atualizarTurma = async (req, res) => {
//     const { id } = req.params;
//     const dados = req.body;

//     const turma = await prisma.turmas.update({
//         where: { id },
//         data: dados
//     });

//     res.json(turma).status(200).end();
// };

module.exports = {
    novocar
    // apagarTurma,
    // atualizarTurma
}