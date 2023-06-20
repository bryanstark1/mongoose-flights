const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: (() => {
      // https://stackoverflow.com/questions/33923973/adding-1-year-to-a-date-with-javascript
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date;
    })
  }
})

module.exports = mongoose.model('Flights', flightSchema)