const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

router.route('/:pizzaId').post(addComment);
router.route('/:pizzaId/:commentId').delete(removeComment);

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;