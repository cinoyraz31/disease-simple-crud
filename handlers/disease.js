const {validationResult} = require('express-validator');
const connection = require('../config/database');

exports.create = function(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const data = { ...req.body };
    const querySql = 'INSERT INTO disease SET ?';
    const categoryQuerySql = "SELECT * FROM category WHERE id = ?";

    connection.query(categoryQuerySql, data.category_id, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        if(rows.length){
            connection.query(querySql, data, (err, rows, field) => {
                if (err) {
                    return res.status(500).json({ message: 'Gagal insert data!', error: err });
                }
        
                res.status(201).json({ success: true, message: 'Berhasil insert data!' });
            });
        } else {
            return res.status(400).json({ message: 'kategori tidak ditemukan!', success: false });
        }
    });
}

exports.index = function(req, res) {
    const querySql = 'SELECT disease.*, category.name AS category_name  FROM disease inner join category ON disease.category_id = category.id';
    connection.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
}

exports.update = function(req, res) {
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM disease WHERE id = ?';
    const queryUpdate = 'UPDATE disease SET ? WHERE id = ?';
    const categoryQuerySql = "SELECT * FROM category WHERE id = ?";

    connection.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        if (rows.length) {
            connection.query(categoryQuerySql, data.category_id, (err, rows, field) => {
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }
                
                if (rows.length) {
                    connection.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                        if (err) {
                            return res.status(500).json({ message: 'Ada kesalahan', error: err });
                        }
        
                        res.status(200).json({ success: true, message: 'Berhasil update data!' });
                    });
                } else {
                    return res.status(400).json({ message: 'kategori tidak ditemukan!', success: false });
                }
    
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}

exports.delete = function(req, res) {
    const querySearch = 'SELECT * FROM disease WHERE id = ?';
    const queryDelete = 'DELETE FROM disease WHERE id = ?';

    connection.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        if (rows.length) {
            connection.query(queryDelete, req.params.id, (err, rows, field) => {
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}