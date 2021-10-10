const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'harrykane',
    email: 'harry@spurs.com',
    password: 'password123'
  },
  {
    username: 'jamievardy',
    email: 'jvardy@gmail.com',
    password: 'password123'
  },
  {
    username: 'mosalah',
    email: 'mosalah@reds.com',
    password: 'password123'
  },
  {
    username: 'leomessi',
    email: 'goat@soccer.com',
    password: 'password123'
  },
  {
    username: 'coutinho',
    email: 'phillipe@barca.com',
    password: 'password123'
  },
  {
    username: 'giniwijnaldum',
    email: 'gini@psg.com',
    password: 'password123'
  },
  {
    username: 'heungminson',
    email: 'hms@spurs.com',
    password: 'password123'
  },
  {
    username: 'locelso',
    email: 'locelso@spurs.com',
    password: 'password123'
  },
  {
    username: 'hendo',
    email: 'jhenderson@reds.com',
    password: 'password123'
  },
  {
    username: 'jurgenklopp',
    email: 'heavymetalfootie@reds.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;