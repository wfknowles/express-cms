const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    feature_image: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    feature_image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    feature_image: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    feature_image: 'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    feature_image: 'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    feature_image: 'https://images.pexels.com/photos/6439051/pexels-photo-6439051.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    feature_image: 'https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    feature_image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    feature_image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    feature_image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    feature_image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    feature_image: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur`,
    user_id: 3
  },
  {
    title:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    feature_image: 'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    feature_image: 'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    feature_image: 'https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    feature_image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    feature_image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;