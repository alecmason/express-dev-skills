var Skill = require('../models/skills');

module.exports = {
    index,
    show,

};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        // Would like to display the number of the todo within the list
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    });
}
