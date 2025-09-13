const express = require('express');
const path = require('path');
const fs = require('fs');
// const formidable = require('formidable')
const { formidable } = require('formidable');

const app = express();
const PORT = 5000;
const uploadDir = path.join(__dirname, "uploads");

app.get('/', (req, res) => {
    res.send("Hello World!!#@$#$@!");
})

app.get('/a', (req, res) => {
    res.send("Send as POST");
});

app.post('/a', (req, res) => {
    res.send("You were pranked");
});

app.get('/api/list-files', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Error listing files", err);
            return res.status(500).json({ error: "Error listing files" });
        }
        res.json({ files });
    });
});


app.post('/api/upload-file', (req, res) => {
    const form = formidable({uploadDir:uploadDir, keepExtensions: true, 
        filename: (name, ext, part, form) => {
            return part.originalFilename;
        }
    });
    form.parse(req, (err, fields, files) => {
        console.log(err, fields, files);
        if(err){
            console.error("Error Parsing the Files", err);
            return res.status(500).json({ error: "Error Parsing the Files" });
        }
        res.json({message: "File Uploaded Successfully", files: files, fields: fields});
    });
});

app.put('/api/update-file/:oldname/:newname', (req, res) =>{
    const oldfilepath = path.join(uploadDir, req.params.oldname);
    const newfilepath = path.join(uploadDir, req.params.newname);
    fs.rename(oldfilepath, newfilepath, (err) => {
        if(err) {
            console.error("Error Renaming the File")
            return res.status(500).json({ error: "Error Renaming the File" })
        }
        res.json({ message: "File Renamed Successfully" });
    });
});

app.delete('/api/delete-file/:filename', (req, res) => {
    const filepath = path.join(uploadDir, req.params.filename);
    fs.unlink(filepath, (err) => {
        if(err) {
            return req.status(500).json({ error: "Error Deleting the File" });
        }
        res.json({message: "File Deleted Successfully"});
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});

