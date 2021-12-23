// The ids can be generated using:
// Date.now() % 1000000
const skills = [
  { id: 125223, skill: "Javascript", ability: true },
  { id: 127904, skill: "ExpressJS", ability: false },
  { id: 139608, skill: "NodeJS", ability: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne
};

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find((skill) => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function update(id, skill) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
