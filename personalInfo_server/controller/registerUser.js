var mongo = require('../mongoConnect');
var createuser = require('../controller/createUser');

personModelTemp = mongo.mongoose.model("personalSchema", mongo.personalSchema, "PersonalInfoPortalTemp");
personModel = mongo.mongoose.model("personalSchema", mongo.personalSchema, "PersonalInfo");
// api to store user at temporary location 
function registerUserTemporary(data, callback) {
    //1. before passing data to this function make sure that UserId is added to data object which will be fetched seperate by getUserId api.
    //then add data to temp collection
    createuser.getUser(data.UserName, function (err, res) {
        if (err) {
            callback(err);
        }
        else {
            let temp = JSON.parse(res);
            data.UserId = temp.UserId;
            personModelTemp.create(data, function (err, res1) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, 'Your Data saved successfully.')
                }
            })
        }
    });
}

//api to store user at permanant location and deleting it from temp location after admin approval
function registerUser(data, callback) {
    console.log("data", data);
    personModelTemp.findOne({ UserId: data }, function (err, res) {
        if (err) {
            callback(err);
        }
        else {
            console.log(res);
            let userData = {
                UserId: res.UserId,
                PersonalUniqueId: res.PersonalUniqueId,
                FullName: {
                    fname: res.FullName.fname,
                    mname: res.FullName.mname,
                    lname: res.FullName.lname
                },
                Gender: res.Gender,
                DateOfBirth: res.DateOfBirth,
                Age: res.Age,
                Address: {
                    Addr1: res.Address.Addr1,
                    Addr2: res.Address.Addr2,
                    Addr3: res.Address.Addr3
                },
                City: res.City,
                State: res.State,
                Pincode: res.Pincode,
                Phone: res.Phone,
                Mobile: res.Mobile,
                MaritalStatus: res.MaritalStatus,
                EduStatus: res.EduStatus
            }
            console.log(userData);
            personModel.create(userData, function (err1, resp) {
                if (err1) {
                    callback(err1)
                }
                else {
                    console.log("data", data);
                    personModelTemp.deleteOne({ UserId: data }, function (error, response) {
                        if (error) {
                            callback({ error: 'Error while deleting records from temp storage' });
                        }
                        else {
                            callback(null, 'Requested data saved successfully and removed from temporary storage..')
                        }
                    })
                }
            })
        }
    })
}

function getDatafromTempStore(callback) {
    personModelTemp.find(function (err, res) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, res);
        }
    });
};

module.exports = {
    registerUserTemporary,
    registerUser,
    getDatafromTempStore
}