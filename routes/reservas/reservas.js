import { Router } from 'express';
import { crearReserva, actualizarReserva, eliminarReserva, obtenerReservas } from '../../controllers/reserva-controller.js'; 

const router = Router();

// Rutas
router.get('/obtenerReservas', obtenerReservas);
router.post('/reservar', crearReserva);
router.put('/modificar-reserva', actualizarReserva);
router.delete('/eliminar-reserva/:id', eliminarReserva);

export default router;
