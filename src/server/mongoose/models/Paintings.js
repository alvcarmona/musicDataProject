const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const ChartSchema = new Schema({
    name: ObjectId,
    url: String,
    chart: String,
    country: String
});

module.exports = mongoose.model('Chart', ChartSchema);
