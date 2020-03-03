const db = require ("../database/models/");
const Masterusers = db.masterusers;

const controller = {
	index: (req, res) => {
	Masterusers
        .findAll({
            attributes: ["email"]
        })
        .then(result => {
            return res.json(result);
        }).catch(error => res.json(error));
    }   
	
};
module.exports = controller

