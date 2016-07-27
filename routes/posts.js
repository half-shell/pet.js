var router = require('express').Router();

var models = require('../models');
var Post = models.Post;

module.exports = function(api){
    router.get('/', function(req, res, next){
        Post.findAll()
        .then(function(posts){
            res.send(posts);
        })
        .catch(function(err){
            res.send(err);
        });
    })
    
    .get('/:id', function(req, res, next){
        Post.findById(req.params.id)
            .then(function(post){
                res.send(post);
            })
        .catch(function(err){
            res.send(err);
        });
    })

    .get('/:id/comments', function(req, res, next){
        Post.findById(req.params.id)
        .then(function(post){
            post.getComments()
            .then(function(comments){
                res.send(comments);
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
        Post.create({
            message: req.body.message,
            date: req.body.date,
            petId: req.body.petId
        })
        .then(function(post){
            res.send({success: "Post added successfuly", post})
        })
        .catch(function(err){
            res.send(err)
        })
    })

    .delete('/:id', function(req, res, next){
        Post.findById(req.params.id)
            .then(function(post){
                post.destroy()
                    .then(function(rows){
                        res.send({success:"Post deleted successfuly"});
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
