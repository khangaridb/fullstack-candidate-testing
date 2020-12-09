import express from 'express';

import jobRoute from './job';

const router = express.Router();

router.use('/api/job', jobRoute);

export default router;
