import { Router, Request, Response } from 'express';
const { getBuildingsAndBlocks } = require('../services/buildingServices');

const router = Router();

router.get("/", async (_req: Request, res: Response) => {

    try {

        const { buildings, blocks } = await getBuildingsAndBlocks();
        res.json({ buildings, blocks });
        return;

    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch buildings and blocks' });
        return;
    }

});

module.exports = router;