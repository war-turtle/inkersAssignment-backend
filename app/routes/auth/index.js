import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import ResponseTemplate from '../../templates/response';

const router = express.Router();

router.post('/login', (req, res) => {
    global.db.query(`SELECT * FROM users WHERE username="${req.body.username}" and password="${req.body.password}"`, (err, result, fields) => {
        if (err) {
            res.status(500).json(ResponseTemplate.error(500));
        }

        const data = result[0];
        if (data) {
            const token = jwt.sign({username: data.username}, config.app.WEB_TOKEN_SECRET);
            res.status(200).json(ResponseTemplate.success('Successfully authenticated', {token}));
        } else {
            res.status(400).json(ResponseTemplate.userNotFound());
        }
    });
});

export default router;