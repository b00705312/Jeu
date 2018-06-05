const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/game', function (req, res) {
    res.render('game', {});
});
app.post('/game', function (req, res) {
    

    let userShape1 = req.body.userShape1;
    

    let userShape2 = req.body.userShape2;
  

    let winningUser;
        
        if (userShape1 === "Rock" && userShape2 === "Scissors" || userShape1 === "Paper" && userShape2 ==="Rock"|| userShape1 === "Scissors" && userShape2 ==="Paper") {
            winningUser = "user 1";
        }
        if (userShape2 === userShape1) {
            winningUser = "No one";
        }
        else {
            winningUser ="User 2";
        }
        
    res.render('game', {post:true, userShape1: userShape1, userShape2: userShape2, winningUser: winningUser});
});


app.get('/:users', function (req, res) {
    res.render('home', {users:req.params.users.split(",")});
});
app.get('/mysecret', (req, res) => res.send('Tu ne devrais pas être là!!!'));



app.use(express.static('client'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));