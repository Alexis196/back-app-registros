import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    cancha: { type: mongoose.Schema.Types.ObjectId, ref: 'Cancha', required: true },
    usuario: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

export default Reserva;