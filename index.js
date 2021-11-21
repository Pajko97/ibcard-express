const express = require('express');
const routes = require('./routes.config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();
/* Mail server config */

//conect to mongodb
/* mongoose.connect('mongodb://127.0.0.1:27017/Mamci', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); */
mongoose.connect('mongodb+srv://Pavle:moonshine2020@moonshinedb.sxtge.mongodb.net/MoonshineDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
mongoose.Promise = global.Promise;

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api', routes);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
    res.status(422).send({ error: err.message })
});

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});