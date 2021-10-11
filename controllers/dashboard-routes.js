const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const path = require('path');

// authentication
const authentication = require('../utils/auth');

// root
router.get('/', authentication, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['id', 'username']
                }
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { 
            posts, 
            loggedIn: req.session.loggedIn,
            currentUser: {
                id: req.session.user_id,
                username: req.session.username
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// render new-comment partial
router.get('/post', authentication, (req, res) => {
    res.render('post-form', {
        loggedIn: req.session.loggedIn,
        currentUser: {
            id: req.session.user_id,
            username: req.session.username
        }
    });
});

// edit
router.get('/edit/:id', authentication, (req, res) => {
    Post.findByPk(req.params.id, {
        include: [
        {
            model: Comment,
            attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        },
        {
            model: User,
            attributes: ['id', 'username']
        }
        ]
    })
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('post-form', {
                post,
                loggedIn: req.session.loggedIn,
                currentUser: {
                    id: req.session.user_id,
                    username: req.session.username
                }
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// render new-comment partial
router.get('/comment/:id', authentication, (req, res) => {
    res.render('partials/new-comment', {
        layout: false,
        post_id: req.params.id
    });
});

module.exports = router;