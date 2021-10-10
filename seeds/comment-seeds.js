const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 8
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 1
  },
  {
    content: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 10
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 6,
    post_id: 7
  },
  {
    content: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    content: 'Vivamus vestibulum sagittis sapien.',
    user_id: 7,
    post_id: 4
  },
  {
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    post_id: 18
  },
  {
    content: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 1,
    post_id: 20
  },
  {
    content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    content: 'Morbi a ipsum.',
    user_id: 4,
    post_id: 9
  },
  {
    content: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 14
  },
  {
    content: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    content: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 6,
    post_id: 20
  },
  {
    content: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 14
  },
  {
    content: 'Quisque porta volutpat erat.',
    user_id: 2,
    post_id: 20
  },
  {
    content: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 3,
    post_id: 8
  },
  {
    content: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 6,
    post_id: 4
  },
  {
    content: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 13
  },
  {
    content: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    post_id: 16
  },
  {
    content: 'Curabitur convallis.',
    user_id: 4,
    post_id: 11
  },
  {
    content: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 10
  },
  {
    content: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 6,
    post_id: 2
  },
  {
    content: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 1,
    post_id: 15
  },
  {
    content: 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    content: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 8,
    post_id: 10
  },
  {
    content: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 10
  },
  {
    content: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    content: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 16
  },
  {
    content: 'Sed ante. Vivamus tortor.',
    user_id: 3,
    post_id: 19
  },
  {
    content: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    content: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 7,
    post_id: 5
  },
  {
    content: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 10,
    post_id: 11
  },
  {
    content: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    content: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    content: 'Cras in purus eu magna vulputate luctus.',
    user_id: 5,
    post_id: 3
  },
  {
    content: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    content: 'Proin at turpis a pede posuere nonummy.',
    user_id: 5,
    post_id: 4
  },
  {
    content: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    content: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 8,
    post_id: 19
  },
  {
    content: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    content: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 7,
    post_id: 9
  },
  {
    content: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    content: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 4,
    post_id: 6
  },
  {
    content: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 10,
    post_id: 1
  },
  {
    content: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 4,
    post_id: 19
  },
  {
    content: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    content: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;