import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("yoyo");
});

export default router;