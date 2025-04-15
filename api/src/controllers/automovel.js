const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  try {
    const { placa, modelo, cor, ano, marca, telefone, proprietario, tipo } = req.body;
    const automovel = await prisma.automovel.create({
      data: { placa, modelo, cor, ano, marca, telefone, proprietario, tipo },
    });
    res.status(201).json(automovel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar automóvel', details: error.message });
  }
};


const read = async (req, res) => {
  try {
    const automoveis = await prisma.automovel.findMany();
    res.status(200).json(automoveis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar automóveis', details: error.message });
  }
};

const readone = async (req, res) => {
  try {
    const { placa } = req.params;
    const automovel = await prisma.automovel.findUnique({
      where: { placa },
    });
    if (!automovel) {
      return res.status(404).json({ error: 'Automóvel não encontrado' });
    }
    res.status(200).json(automovel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar automóvel', details: error.message });
  }
};

const update = async (req, res) => {
    try {
      const { placa } = req.params;
      const { modelo, cor, ano, marca, telefone, proprietario, tipo } = req.body;
  
      const automovelExistente = await prisma.automovel.findUnique({
        where: { placa },
      });
  
      if (!automovelExistente) {
        return res.status(404).json({ error: 'Automóvel não encontrado' });
      }
  
      const automovel = await prisma.automovel.update({
        where: { placa },
        data: { modelo, cor, ano, marca, telefone, proprietario, tipo },
      });
  
      res.status(200).json(automovel);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar automóvel', details: error.message });
    }
  };

const deleteAutomovel = async (req, res) => {
  try {
    const { placa } = req.params;
    await prisma.automovel.delete({
      where: { placa },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar automóvel', details: error.message });
  }
};

module.exports = {
  create,
  read,
  readone,
  update,
  deleteAutomovel
};