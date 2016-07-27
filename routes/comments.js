var router = require('express').Router();
var models = require ('../models');
var Comment = models.Comment;

module.exports = function(api){
	router.get('/',function(req,res,next){
		Comment.findAll().then(function(comments){
			res.send(comments);
		})
		.catch(function(err){
			res.send(err);
			
		});
	}).get('/:id', function(req, res, next){
        Comment.findById(req.params.id)
            .then(function(comment){
                res.send(comment);
            })
        .catch(function(err){
            res.send(err);
        });
    })
	  .post('/', function(req, res, next){
        Comment.create({
            message: req.body.message,
            date: req.body.date,
            postId: req.body.postId
        })
        .then(function(comment){
            res.send({success: "Comment added successfuly", comment})
        })
        .catch(function(err){
            res.send(err)
        })
    })

    .delete('/:id', function(req, res, next){
        Comment.findById(req.params.id)
            .then(function(comment){
                comment.destroy()
                    .then(function(rows){
                        res.send({success:"Comment deleted successfuly"});
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
