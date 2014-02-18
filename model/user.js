var mysql = require('./database');

function getUsers(req, res, callback) {
    mysql.connection.query('SELECT * FROM user', function(err, rows){
        return callback(rows);
    });
}

function checkIdentify(req, res, callback) {
    this.getUsers(req, res, function(users){
        users.forEach(function (user) {
            if (req.body.email == user.email && req.body.password == user.password) {
                req.session.user = user;
                return callback(true);
            }
            return callback(false);
        });
    });
}

module.exports = { 
    getUsers : getUsers,
    checkIdentify : checkIdentify,
}