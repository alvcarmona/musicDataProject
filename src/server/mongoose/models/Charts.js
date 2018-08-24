const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const ChartSchema = new Schema({
    _id: String,
    name: String,
    url: String,
    data: String,
    country: String,
    metadata: String
});

const SiteSchema = new Schema({
    _id: String,
    name: String,
    url: String,
    description: String,
    nested: [ChartSchema]
});

module.exports = { Chart:mongoose.model('Chart', ChartSchema),Site:mongoose.model('Site', SiteSchema)};
