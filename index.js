const express= require('expres');
const app = express();
require('dotenv').config();

const  PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Iniciando en puerto ${PORT}`));