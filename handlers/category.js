const {validationResult} = require('express-validator');
const connection = require('../config/database');

exports.create = function(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const data = { ...req.body };
    const querySql = 'INSERT INTO category SET ?';

    connection.query(querySql, data, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        res.status(201).json({ success: true, message: 'Berhasil insert data kategori!' });
    });
}

exports.index = function(req, res) {
    const querySql = 'SELECT category.* FROM category order by id ASC';
    connection.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
}