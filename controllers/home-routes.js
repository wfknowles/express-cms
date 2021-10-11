const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// root
router.get('/', (req, res) => {
    Post.findAll({
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

        res.render('home', {
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

// post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const post = dbPostData.get({ plain: true });

        res.render('single-post', {
            post,
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

// login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// register
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('register');
});
module.exports = router;