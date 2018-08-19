const mongoose = require('mongoose')
mongoose.connect('mongodb://alvaro:carmona1@ds125502.mlab.com:25502/music_data_junkie')
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})
export default mongoose.connection