import { Request, Response, NextFunction } from 'express';

import logging from '../config/logging';
import Book from '../models/book';

const NAMESPACE = 'Sample Controller';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;
    const book = new Book({
        author,
        title
    });

    return book
        .save()
        .then((book) => {
            return res.status(201).json({
                book: book
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBookById = (req: Request, res: Response, next: NextFunction) => {
    Book.findById(req.params.bookId)
        .exec()
        .then((book) => {
            return res.status(200).json({
                book: book
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const removeBookById = (req: Request, res: Response, next: NextFunction) => {
    Book.findByIdAndRemove(req.params.bookId)
        .exec()
        .then((book) => {
            return res.status(200).json({
                book: book
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const updateBookById = (req: Request, res: Response, next: NextFunction) => {
    Book.findByIdAndUpdate(req.params.bookId, req.body)
        .exec()
        .then((book) => {
            return res.status(200).json({
                // book: book,
                updated: true
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { getAllBooks, createBook, getBookById, removeBookById, updateBookById };
