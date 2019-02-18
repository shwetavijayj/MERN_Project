// 1d. loading mongoose driver
var mongoose = require("mongoose");
// 1e. set the global promise to manage all async calls
// made by application using mongoose driver
mongoose.Promise = global.Promise;

// 5. Model-Schema-Mapping with collection on Mongo DB and
// establishing collection with it.'
mongoose.connect(
    "mongodb://localhost/PersonalInfoPortal",
    { useNewUrlParser: true }
);

// 5a. get the connection object
// if dbConnect is not undefined then the connection is successful
var dbConnect = mongoose.connection;
if (!dbConnect) {
    console.log("Sorry Connection is not established");
    return;
}


/// Schema creation
var roleSchema = mongoose.Schema({
    roleId: Number,
    roleName: String
});

var userSchema = mongoose.Schema({
    UserId: Number,
    UserName: String,
    EmailAddress: String,
    Password: String,
    roleId: Number
})

var personalSchema = mongoose.Schema({
    UserId: Number,
    PersonalUniqueId: Number,
    FullName: Object,
    Gender: String,
    DateOfBirth: String,
    Age: Number,
    Address: Object,
    City: String,
    State: String,
    Pincode: Number,
    Phone: Number,
    Mobile: Number,
    PhisicalDisability: String,
    MaritalStatus: String,
    EduStatus: String,
    Birthsign: String

})

module.exports = {
    mongoose,
    roleSchema,
    userSchema,
    personalSchema
}