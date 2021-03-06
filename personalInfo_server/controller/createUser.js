var mongo = require('../mongoConnect');
var userRole = require('./userRole');

//creating user model
var userModel = mongo.mongoose.model('User', mongo.userSchema, "users");
// api to create user
function createUser(data, callback) {
    userRole.getRole(data.userRole, function (error, res1) {
        if (error) {
            callback(error)
        }
        else {
            data.roleId = res1.data;
            userModel.create(data, function (err, res) {
                if (err) {
                    callback({ status: 404, error: err });
                }
                else {
                    callback(null, 'User created successfully.')
                }
            })
        }
    })

};

// api to get user id by username
function getUser(data, callback) {
    userModel.findOne({ UserName: data }, function (err, res) {
        if (err) {
            callback({ status: 404, data: err })
        }
        else {
            let ans = JSON.stringify(res);
            console.log(ans);
            callback(null, ans)
        }
    })
}


module.exports = {
    createUser,
    getUser
}