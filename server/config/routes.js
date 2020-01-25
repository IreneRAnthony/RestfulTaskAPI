const tasks = require("../controllers/tasks")

module.exports = function (app){
    app.get('/', (req, res) => {
        tasks.index(req, res);
    });

    app.get('/:id', (req, res) => {
        tasks.search(req, res);
    });

    app.post('/new/:title/', (req, res) => {
        tasks.create(req, res);
    });

    app.put('/update/:id/:title/:description/:completed', (req, res) => {
        tasks.update(req, res);
    });

    app.delete('/delete/:id', (req, res) => {
        tasks.delete(req, res);
    });

};