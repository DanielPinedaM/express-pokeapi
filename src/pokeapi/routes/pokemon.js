// @ts-nocheck
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Buscar un Pokemon en especifico por ID ó nombre
router.get('/:search', async (req, res) => {
  const search = req?.params?.search.trim().toLowerCase();
  try {
    const response = await axios.get(`${process.env.POKEAPI}/${search}`);
    const data = response?.data;
    const info = {
      id: data?.id,
      name: data?.name,
      types: data?.types?.map((type) => type?.type?.name),
      img: data?.sprites?.other?.dream_world?.front_default ?? data?.sprites?.other?.home?.front_default
    };
    res.json(info);
  }
  catch (error) {
    console.error(error);
    res.status(404).send(`No se encuentra el Pokémon ${search}`);
  }
});

// Listar los primeros 20 pokemon
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.POKEAPI}`);
    const data = response?.data;
    res.json(data);
  }
  catch (error) {
    res.status(404).send(`Error al listar los primeros 20 Pokemon ${error}`);
  }
});

module.exports = router;
