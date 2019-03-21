import express from 'express';
import ResponseTemplate from '../../templates/response';

const route = express.Router();

route.all('*', (req, res) => {
    res.status(404).json(ResponseTemplate.routeNotFound());
})

export default route;