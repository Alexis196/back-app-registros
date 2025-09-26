import { Router } from 'express';
import canchasRoutes from '../routes/canchas/canchas-get.js';
import reservasRoutes from '../routes/reservas/reservas.js';

const router = Router();

router.use('/canchas', canchasRoutes);
router.use('/reservas', reservasRoutes);

export default router;
