const express = require('express');
const path = require('path');
const app = express();

// Configuración correcta de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Public_html'));

// ¡Esto es crucial! Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Public_html')));

// Rutas
app.get('/', (req, res) => res.render('index'));
app.get('/gramatica', (req, res) => res.render('gramatica'));
app.get('/recursos', (req, res) => res.render('recursos'));
app.get('/juegos', (req, res) => res.render('juegos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));