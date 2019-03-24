import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import ResponseTemplate from '../../templates/response';

const router = express.Router();

router.get('/pie', (req, res) => {
    global.db.query("SELECT * FROM pie", (err, result, fields) => {
        if (err) {
            res.status(500).json(ResponseTemplate.error(500));
        }
    
        let value = [];
        let labels = [];
        result.map((data) => {
            value.push(data.value);
            labels.push(data.label);
        });
        res.status(200).json(ResponseTemplate.success('Successfully fetched data', {value, labels}));
    });
});

router.get('/bar', (req, res) => {
    global.db.query("SELECT * FROM bar", (err, result, fields) => {
        if (err) {
            res.status(500).json(ResponseTemplate.error(500));
        }
    
        let value = [];
        let labels = [];
        result.map((data) => {
            value.push(data.value);
            labels.push(data.label);
        });
        res.status(200).json(ResponseTemplate.success('Successfully fetched data', {value, labels}));
    });
});

export default router;