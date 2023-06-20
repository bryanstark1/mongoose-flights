const Flight = require('../models/flight');

const index = async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/index', {flights, title: 'All Flights'});
};




module.exports = {
  index,
}