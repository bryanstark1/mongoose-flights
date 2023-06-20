const Flight = require('../models/flight');

const index = async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/index', {flights, title: 'Flights List'});
};

const newFlight = (req, res) => {
  res.render('flights/new', {errorMsg: '', title: 'Add New Flight'});
};

const create = async (req, res) => {
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('movies/new', {errorMsg: err.message});
  };
};


module.exports = {
  index,
  new: newFlight,
  create
}