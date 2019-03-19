var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true });

var employeeSchema = new Schema({
    name: String,
});
 
module.exports = mongoose.model('Employee', employeeSchema);
