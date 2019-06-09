
const db = require("../models");




// Defining methods for the loadController
module.exports = {
    findAll: function (req, res) {
        db.Load.find(req.query)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    //============================================
    find: function (req, res) {
        let equipment_query = "";
        if (req.params.equipment == "container_refrigerated") {
            equipment_query = "container_efrigerated";
        } else if (req.params.equipment == "container_double") {
            equipment_query = "container_double";
        } else if (req.params.equipment == "dry_van") {
            equipment_query = "dry_van";
        } else if (req.params.equipment == "dump_trailer") {
            equipment_query = "dump_trailer";
        } else if (req.params.equipment == "flatbed") {
            equipment_query = "Flatbed";
        } else if (req.params.equipment == "lowboy") {
            equipment_query = "Lowboy";
        } else if (req.params.equipment == "reefer") {
            equipment_query = "Reefer";
        } else {
            equipment_query = "Tanker";
        }

        let distance_query = "";
        if (req.params.distance == 1) {
            distance_query = { $lt: 201, $gt: 0 };
        } else if (req.params.distance == 2) {
            distance_query = { $lt: 401, $gt: 200 };
        } else if (req.params.distance == 3) {
            distance_query = { $lt: 601, $gt: 400 };
        } else {
            distance_query = { $gt: 600 };
        }

        let rate_query = "";
        if (req.params.rate == "low") {
            rate_query = { $lt: 1.10, $gt: 0 };
        } else if (req.params.rate == "medium") {
            rate_query = { $lt: 3.10, $gt: 1.00 };
        } else {
            rate_query = { $gt: 3.00 };
        }


        /* db.Load.find({
            equipment: { equipment_query },
            distance: distance_query,
            rate: rate_query
        }).then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    }, */

        db.Load.find({
            equipment: equipment_query,
            distance: distance_query,
            rate: rate_query
        }).then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    //==============================??
    findAll: function (req, res) {
        db.Load.find({ equipment: (req.param.equipment), distance: (req.param.distance), rate: (req.param.rate) })
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Load.findById(req.params.id)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Load.create(req.body)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Load.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Load.findById(req.params.id)
            .then(dbLoad => dbLoad.remove())
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    }
};

//-----------------------------------------------
//=======================
/*const db = require("../models");




// Defining methods for the loadController
module.exports = {
    findAll: function (req, res) {
        db.Load.find(req.query)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    //============================================
    find: function (req, res) {
        let equipment_query = "";
        if (req.params.equipment == "container_refrigerated") {
            equipment_query = "Container Refrigerated";
        } else if (req.params.equipment == "container_double") {
            equipment_query = "Container Double";
        } else if (req.params.equipment == "dry_van") {
            equipment_query = "Dry Van";
        } else if (req.params.equipment == "dump_trailer") {
            equipment_query = "Dump Trailer";
        } else if (req.params.equipment == "flatbed") {
            equipment_query = "Flatbed";
        } else if (req.params.equipment == "lowboy") {
            equipment_query = "Lowboy";
        } else if (req.params.equipment == "reefer") {
            equipment_query = "Reefer";
        } else {
            equipment_query = "Tanker";
        }

        let distance_query = "";
        if (req.params.distance == 1) {
            distance_query = "'$lt':201, 'gt':0";
        } else if (req.params.distance == 2) {
            distance_query = "'$lt':401, '$gt':200";
        } else if (req.params.distance == 3) {
            distance_query = "'$lt':601, '$gt':400";
        } else {
            distance_query = "'$gt':600";
        }

        let rate_query = "";
        if (req.params.rate == "low") {
            equipment_query = "'$lt':1.10, '$gt':0";
        } else if (req.params.rate == "medium") {
            rate_query = "'$lt':3.10, '$gt':1.00";
        } else {
            rate_query = "$gt':3.00";
        }


        db.Load.find({
            "equipment": { equipment_query },
            "distance": { distance_query },
            "rate": { rate_query },
        }).then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));

    },
    //==============================??
    findAll: function (req, res) {
        db.Load.find({ equipment: (req.param.equipment), distance: (req.param.distance), rate: (req.param.rate) })
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Load.findById(req.params.id)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Load.create(req.body)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Load.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Load.findById(req.params.id)
            .then(dbLoad => dbLoad.remove())
            .then(dbLoad => res.json(dbLoad))
            .catch(err => res.status(422).json(err));
    }
};*/
