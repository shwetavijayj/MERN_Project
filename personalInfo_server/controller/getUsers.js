var mongo = require('../mongoConnect');
personModel = mongo.mongoose.model("personalSchema", mongo.personalSchema, "PersonalInfo");
personModelTemp = mongo.mongoose.model("personalSchema", mongo.personalSchema, "PersonalInfoPortalTemp");


/*
    this api will return information of user to display it on home-page
*/
function getUserInfo(data, callback) {
    condition = {
        UserId: parseInt(data.UserId)
    }
    personModel.findOne(condition, function (err, res) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, res);
        }
    });
}


/*
Admin purpose
this api will return information of all users
*/
function getAllUserInformation(callback) {
    personModel.find(function (err, res) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, res);
        }
    })
}

/*
Admin purpose
this api will return information of all users from temporary user
*/
function getAllTempUsersInformation(callback) {
    personModelTemp.find(function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res)
        }
    })
}

module.exports = {
    getUserInfo,
    getAllUserInformation,
    getAllTempUsersInformation
}