const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 10
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur`,
    user_id: 3
  },
  {
    title:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 7
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    feature_image: 'https://placehold.co/1600x900',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur? Lorem 
    ipsum dolor sit amet consectetur adipisicing elit. Nam itaque ipsa nostrum nisi magni delectus vel accusantium! 
    Deserunt consequatur tempora nihil! Corrupti eaque sed iusto? Explicabo blanditiis temporibus quo aspernatur?`,
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;