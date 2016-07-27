var router = require('express').Router();

var models = require('../models');
var User = models.User;

module.exports = function(api){
    router.get('/', function(req, res, next){
        User.findAll()
            .then(function(users){
                res.send(users);
            })
        .catch(function(err){
            res.send(err);
        });
    })
    
    .get('/:id', function(req, res, next){
        User.findById(req.params.id)
            .then(function(user){
                res.send(user);
            })
        .catch(function(err){
            res.send(err);
        });
    })

    .get('/:id/pets', function(req, res, next){
        User.findById()
        .then(function(user){
            user.getPets()
            .then(function(pets){
                res.send(pets);
            })
            .catch(function(err){
                res.send(err);
            })
        })
        .catch(function(err){
            res.send(err);
        })
    })

    .post('/', function(req, res, next){
        User.create({
            login: req.body.login,
            password: req.body.password
        })
        .then(function(user){
            res.send({success: "User added successfuly", user})
        })
        .catch(function(err){
            res.send(err)
        })
    })

    .delete('/:id', function(req, res, next){
        User.findById(req.params.id)
            .then(function(user){
                user.destroy()
                    .then(function(rows){
                        res.send({success:"User deleted successfuly"});
                    })
                .catch(function(err){
                    res.send(err);
                })
            })
        .catch(function(err){
            res.send(err);
        })
    });

    return router;
}
