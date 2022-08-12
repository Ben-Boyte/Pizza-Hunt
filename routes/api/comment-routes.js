const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

  router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

router.route('/:pizzaId/:commentId').delete(removeComment);
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;