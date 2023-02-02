// const db = require('../db/dbConfig');
const express =require('express');
const controller = express.Router();

const artistsData = require('../json/artistsData.json')



//GET ALL

controller.get('/', (request, response)=>{
  response.json(artistsData);
})

//GET all
controller.get('/artists', (request, response) => {
  try {
    const { artists } = artistsData;
    response.status(200).json({ data: artists });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

//get one 
controller.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { artists } = artistsData;

    const artist = artists.find((el) => el.id === id);
    if (artist) {
      // return 200
      return response.status(200).json({ data: artist });
    }
    // return 404
    response
      .status(404)
      .json({ error: `Could not find artist with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});



module.exports = 
  controller
  // getAllArtists,
  //  oneArtist,
  // createArtist,
  // editArtist,

