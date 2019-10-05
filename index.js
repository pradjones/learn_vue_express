const express =  require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('test'));

app.get('/quiz', function(req, res){
    res.sendFile(__dirname + '/test/test.html');
    console.log('sent file');
  }); 


app.listen(5000, ()=> console.log("hello"));
