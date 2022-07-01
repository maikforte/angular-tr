const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use('/', express.static('dist/angular-test'));

app.listen(port, () => {
    console.log(`app is running on port ${port}...`);
});
