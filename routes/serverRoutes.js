const express = require('express');
const router = express.Router();
const flipController = require('../controller/flipController');

router.route('/')
      .get(flipController.getFlipAllProduct)
      .post((req,res) => {res.send("Got you..!!");})
    
router.route('/product')
      .get(flipController.getFlipProduct)
      .post(flipController.postFlipProduct)
      .delete(flipController.deleteFlipProduct)
      .patch(flipController.updateFlipProduct)

router.route('/product/id')
    .get(flipController.getFlipAllProductById)

router.route('/search')
      .get(flipController.getFlipSearchProduct)
    module.exports = router;