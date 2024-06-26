import express from 'express'
import * as reviewsController from '../controllers/reviews'

const router = express.Router()

router.get('/getTotalReviewProduct', reviewsController.getTotalReviewsProduct)
router.get('/getReviewProduct', reviewsController.getReviews)
router.post('/createReview', reviewsController.createReview)

export default router
