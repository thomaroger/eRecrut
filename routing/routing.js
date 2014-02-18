var user = require('../model/user');

function setup(app){
    app.get('/', function(req, res) {
        var data = {'title' :'eRecrut - BackOffice'};
        res.render('index.ejs', data);
    });

    app.post('/', function (req, res) {
        user.checkIdentify(req, res, function callback(ret) {
            if (ret == true) {
                res.redirect(302, '/dashboard');
            } else {
                res.redirect(302, '/'); 
            }
        });
    });

    app.get('/dashboard', function(req, res) {

        if (typeof req.session.user === 'undefined'){
            return res.redirect(302, '/');
        }

        var data = {'title' :'eRecrut - Dashboard',
                    'user': req.session.user};
                    
        res.render('dashboard.ejs', data);
    });

    app.get('/logout', function(req, res) {
        req.session.user = null;
        return res.redirect(302, '/');
    });


    app.use(function(req, res, next){
        console.log('%s %s', req.method, req.url);
        res.setHeader('Content-Type', 'text/plain');
        res.send(404, 'Page introuvable !');
    });
}

module.exports = {
    setup : setup
}