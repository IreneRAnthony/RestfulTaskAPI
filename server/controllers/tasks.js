const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },

    search: function (req, res) {
        Task.find({
                _id: req.params.id
            })
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },

    create: function (req, res) {
        Task.create({
                title: req.params.title
            })
            .then(newTask => {
                res.redirect('/');
            })
            .catch(err => res.json(err));
    },


    update: function (req, res) {
        Task.findByIdAndUpdate(req.params.id, {
                title: req.params.title,
                description: req.params.description,
                completed: req.params.completed
            })
            .then(task => {
                res.redirect('/');
            })
            .catch(err => res.json(err));
    },

    delete: function (req, res) {
        Task.remove({
                _id: req.params.id
            })
            .then(deletedTask => {
                res.redirect('/');
            })
            .catch(err => res.json(err));
    }

};