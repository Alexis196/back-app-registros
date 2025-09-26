import mongoose from 'mongoose';

const canchaSchema = new mongoose.Schema({
    cancha: { type: String, required: true },
    tipo_cancha: { type: String, required: true}
});

const Cancha = mongoose.model('Cancha', canchaSchema);

export default Cancha;