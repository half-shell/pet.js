var router = require('express').Router();
var models = require ('../models');
var Pet = models.Pet;

module.exports = function(api){
    router.get('/',function(req,res,next){
        Pet.findAll().then(function(pets){
            res.send(pets);
        })
        .catch(function(err){
            res.send(err);

        });
    })

    .get('/:id', function(req, res, next){
        Pet.findById(req.params.id)
            .then(function(pet){
                res.send(pet);
            })
        .catch(function(err){
            res.send(err);
        });
    })

    .get('/:id/posts', function(req, res, next){
        Pet.findById(req.params.id)
            .then(function(pet){
                pet.getPosts()
                    .then(function(posts){
                        res.send(posts);
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
        Pet.create({
            name: req.body.name,
            type: req.body.type,
            born: req.body.born,
            userId: req.body.userId
        })
        .then(function(pet){
            res.send({success: "Pet added successfuly", pet})
        })
        .catch(function(err){
            res.send(err)
        })
    })

    .delete('/:id', function(req, res, next){
        Pet.findById(req.params.id)
            .then(function(pet){
                pet.destroy()
                    .then(function(rows){
                        res.send({success:"Pet deleted successfuly"});
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
