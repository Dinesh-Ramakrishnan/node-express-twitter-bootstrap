var app = require('./app').init(process.env.VCAP_APP_PORT);

var locals = {
        title: 		 'NodeJS Boostrap using Express / EJS / Twitter Bootstrap / CSS3',
        description: 'Node Express HTML5 & CSS3',
		url:'http://prdexample.cloudfoundry.com/',
        author: 	 'Alexandre Collin'
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('template.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});