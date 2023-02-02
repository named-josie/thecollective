const artistsData = require('../json/artistsData.json');


//Get all
app.get('/', (request, response) => {
  try {
    const { artists } = artistsData;
    response.status(200).json({ data: artists });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});
//Get One 
console.log('hello')
 

// const createArtist = async (artist) => {
//   try {
//     const newArtist = await db.any(
//       'INSERT INTO artists (firstname, city, email, avatar, bio, is_available) VALUES ($1, $2, $3, $4, $5, $6,) RETURNING *',
//       [
//         artist.name,
//         artist.city,
//         artist.email,
//         artist.avatar,
//         artist.bio,
//         artist.is_available,
//       ],
//     );
//     return newArtist;
//   } catch (error) {
//     console.log(error.message || error);
//     return error;
//   }
// };

// //Edit Artist
// const editArtist = async (
//   id,
//   {name, city, email, avatar, bio, is_available },
// ) => {
//   try {
//     const updatedArtist = await db.one(
//       'UPDATE artists SET name=$1,  city=$2, email=$3, avatar=$4, bio=$5 is_available=$6 WHERE id=$7 RETURNING *',
//       [name, city, email, avatar, bio, is_available],
//     );
//     return updatedArtist;
//   } catch (error) {
//     console.log(error.message || error);
//     return error;
//   }
// };
