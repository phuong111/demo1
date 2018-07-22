const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    hoten: String,
    ngaysinh: Date,
    sdt: String
});
const User = module.exports = mongoose.model('User', UserSchema);