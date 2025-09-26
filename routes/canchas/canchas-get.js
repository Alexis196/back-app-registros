import { Router } from 'express';
import { obtenerCanchas, crearCancha } from '../../controllers/cancha-controller.js';

const router = Router();

// Rutas
router.get('/', obtenerCanchas);
router.post('/', crearCancha);

export default router;
