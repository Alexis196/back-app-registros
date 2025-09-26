import Reserva from '../models/reservaModel.js';

// Obtener todas las reservas
export const obtenerReservas = async (req, res, next) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
};

// Crear una nueva reserva
// Crear o actualizar una reserva
// Crear una nueva reserva
export const crearReserva = async (req, res, next) => {
    const { cancha, usuario, fecha, hora } = req.body;

    try {
        // Verificar si ya existe una reserva para la misma cancha, fecha y hora
        const reservaExistente = await Reserva.findOne({ cancha, fecha, hora });

        if (reservaExistente) {
            // Si ya existe, devolver error
            return res.status(400).json({
                mensaje: 'Esta hora ya está reservada para la cancha seleccionada'
            });
        }

        // Si no existe, crear la reserva
        const nuevaReserva = new Reserva({ cancha, usuario, fecha, hora });
        await nuevaReserva.save();

        res.status(201).json({
            mensaje: 'Reserva creada correctamente',
            reserva: nuevaReserva
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ mensaje: err.message });
    }
};



// Actualizar una reserva existente
// controllers/reserva-controller.js
export const actualizarReserva = async (req, res, next) => {
    const { id } = req.params;
    const { cancha, usuario, fecha, hora } = req.body;

    try {
        const reservaActualizada = await Reserva.findByIdAndUpdate(
            id,
            { cancha, usuario, fecha, hora },
            { new: true }
        );

        if (!reservaActualizada) {
            return res.status(404).json({ mensaje: "Reserva no encontrada" });
        }

        res.json(reservaActualizada);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
};



export const eliminarReserva = async (req, res, next) => {
    const { id } = req.params;
    try {
        const reservaEliminada = await Reserva.findByIdAndDelete(id);
        if (!reservaEliminada) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        res.json({ mensaje: 'Reserva eliminada correctamente', reservaEliminada });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ mensaje: err.message });
    }
};