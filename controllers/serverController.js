let data = [];
let id = 0;
module.exports = {
   get: (req,res) => {
      res.status(200).send(data)
   },
   post: (req, res) => {
      console.log('hitbackend')
      const {song, artist} = req.body
      data.push({song, artist})
      id++
   }
   
}