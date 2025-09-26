import { Router } from 'express';
import { crearReserva, actualizarReserva, eliminarReserva, obtenerReservas } from '../../controllers/reserva-controller.js'; 

const router = Router();

// Rutas
router.get('/obtenerReservas', obtenerReservas);
router.post('/reservar', crearReserva);
// routes/reserva-routes.js
router.put('/modificar-reserva/:id', actualizarReserva);

router.delete('/eliminar-reserva/:id', eliminarReserva);

export default router;
