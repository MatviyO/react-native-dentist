const mongoose = require('mongoose');

try {
    await mongoose.connect('mongodb://localhost:27017/dental', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }).then(() => {
            console.log('Mongoose has been started')
        })

} catch (error) {
    console.log(error);
}
module.exports = mongoose;
