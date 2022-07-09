const personagemModel = require("../models/personagens.json");
const fs = require("fs");

const findAllPersonagens = (req, res) => {
  res.status(200).json(personagemModel);
};

const findPersonagemById = (req, res) => {
  const id = req.params.id;
  const personagem = personagemModel.find((personagem) => personagem.id === id);

  if (personagem) {
    res.status(200).json(personagem);
  } else {
    res.status(404).json({ message: "Personagem não encontrado" });
  }
};

const createPersonagem = (req, res) => {
  const personagem = req.body;
  personagem.id = personagemModel.length;

  personagemModel.push(personagem);

  fs.writeFile("./", JSON.stringify(personagemModel), "utf-8", (err) => {
    if (err) {
      return res.status(411).json({ message: "Erro ao salvar personagem" });
    }
  });

  res.status(201).json(personagem);
};

module.exports = {
  findAllPersonagens,
  findPersonagemById,
  createPersonagem,
};
