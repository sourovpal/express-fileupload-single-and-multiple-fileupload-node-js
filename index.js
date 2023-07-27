const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.use(fileUpload());

app.post('/', (req, res)=>{

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

// ================== Single File Upload ===========================


  var file = req.files.sample_image;
  
  upload_path = __dirname+'/uploads/' + file.name;

  file.mv(upload_path, function(err) {

    if (err){
        return res.status(500).send(err);
    }

    res.send('File uploaded!');

  });
    


// ================== Multiple File Upload ==================



    var files = req.files.sample_image;
  
    files.forEach((file)=>{

        upload_path = __dirname+'/uploads/' + file.name;
        
        file.mv(upload_path, function(err) {
        
            if (err){
                // return res.status(500).send(err);
            }
            
        });
    });
    
    res.send('File uploaded!');


});


app.listen(5000, ()=>{
    console.log('http://localhost:5000');
});

