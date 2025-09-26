import Cancha from '../models/canchaModel.js';

export const obtenerCanchas = async (req, res, next) => {
    try {
        const canchas = await Cancha.find();
        res.json(canchas);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
};

export const crearCancha = async (req, res, next) => {
    const { cancha, tipo_cancha } = req.body;
    try {
        const nuevaCancha = new Cancha({ cancha, tipo_cancha });
        await nuevaCancha.save();
        res.status(201).json(nuevaCancha);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ mensaje: err.message });
    }
};
