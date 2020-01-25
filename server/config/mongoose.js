const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Task', {useNewUrlParser: true});

require("../models/task")