var express = require('express');

module.exports = function(){
    var app = express();

    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./public'));

    app.get('/index', function(req, res){
        res.render('index',{nome: "Express"});
    });

    return app;
}