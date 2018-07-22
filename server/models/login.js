const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const LoginSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    quyen: String,
    user: Schema.Types.ObjectId
});
const Login = module.exports = mongoose.model('Login', LoginSchema);