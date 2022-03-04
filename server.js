const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
//here
const SAMPLE_IMAGE = "https://picsum.photos/200"
app.get('/', function(request, response) {
    console.log('Home page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');

    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, 'Home Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
        result = data.replace(/\$OG_IMAGE/g, SAMPLE_IMAGE);
        response.send(result);
    });
});

app.get('/about', function(request, response) {
    console.log('About page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'About Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
        result = data.replace(/\$OG_IMAGE/g, SAMPLE_IMAGE);
        response.send(result);


    });
});

app.get('/contact', function(request, response) {
    console.log('Contact page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Contact Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
        result = data.replace(/\$OG_IMAGE/g, SAMPLE_IMAGE);
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'The After Me Network');
        data = data.replace(/\$OG_DESCRIPTION/g, "Leave messages for loved ones once you've passed away.");
        result = data.replace(/\$OG_IMAGE/g, SAMPLE_IMAGE);
        response.send(result);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));