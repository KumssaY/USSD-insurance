const express = require('express');
const ussdRoutes = require('./routes/ussdRoutes');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use('/ussd', ussdRoutes);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
