const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');
const app = express()
const port = 3500;
const {exec} = require('child_process');
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));

let inputFile;
let prefix = 'videos/';

// reading the post request from the client:
app.post('/',(req,res)=>{

  inputFile=req.body['inputFile'];
  console.log(inputFile);
  inputFile = prefix.concat(inputFile);
  console.log(inputFile);

  if(inputFile==='videos/example_01.mp4'){

    exec('python people_counter_ex1.py');
  
  }
  if(inputFile==='videos/example_02.mp4'){

    exec('python people_counter_ex2.py');
  
  }
  if(inputFile==='videos/example_03.mp4'){

    exec('python people_counter_ex3.py');
  
  }
})



// axios.get('/')
// .then(res=>console.log(res.json()['statusMessage']))
// .catch(console.error);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})