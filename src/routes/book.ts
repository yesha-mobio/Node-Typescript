import express from 'express';

import controller from '../controllers/book';

const router = express.Router();

router.post('/create/book', controller.createBook);

router.get('/get/books', controller.getAllBooks);

router.get('/view/book/:bookId', controller.getBookById);

router.delete('/remove/book/:bookId', controller.removeBookById);

router.put('/update/book/:bookId', controller.updateBookById);

export = router;
