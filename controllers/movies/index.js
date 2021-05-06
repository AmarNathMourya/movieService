const Item = require('../../models/Item');

const insertMoviesRecord = async(req, res) => {
  try {
    const { name, description, genres, duration, rating, releaseDate} = req.body
    if (name && description && genres && duration && rating) {
      await Item.create({
        name,
        description,
        genres,
        duration,
        rating,
        release_date: releaseDate || new Date()
      });
      return res.status(200).json({"ApiStatus": "Success", message: "Record Added successfully"})
    } else {
      res.status(400).json({apiStatus: "Failure", error: "Data is missing in Body"});
    }
  }
  catch(error) {
    res.status(400).json({apiStatus: "Failure", error: "Error while innserting record"});
  }
}

const deleteMoviesRecord = async (req, res) => {
  try {
    if (req.params && req.params.name) {
      await Item.deleteOne({ name: req.params.name });
      return res.status(200).json({"ApiStatus": "Success", message: "Record Deleted successfully"})
  
    } else {
      res.status(400).json({apiStatus: "Failure", error: "Delete parameter is missing"});
    }
  } 
  catch(error) {
    res.status(400).json({apiStatus: "Failure", error: "Error While Delete"});
  }
}

const fetchMoviesData = async(req, res) => {
  try{
    const filter = {};
    if (req.params && req.params.name) {
      filter.name = req.params.name
    }
    const item = await Item.find(filter);
    return res.status(200).json({"ApiStatus": "Success", data: item})
  }
  catch(error) {
    res.status(400).json({"ApiStatus": "Failure", error: "Error While Fetching data"})
  }
}

module.exports = {
  insertMoviesRecord,
  deleteMoviesRecord,
  fetchMoviesData
}