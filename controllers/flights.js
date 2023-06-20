const Flight = require('../models/flight');

const index = async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/index', {flights, title: 'Flights List'});
};

const newFlight = (req, res) => {
  res.render('flights/new', {errorMsg: '', title: 'Add New Flight'});
};


module.exports = {
  index,
  new: newFlight
}