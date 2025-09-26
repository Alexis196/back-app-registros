import 'dotenv/config';
import app from './app.js';
import conectarDB from './db.js';

// Conectar a MongoDB
conectarDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
