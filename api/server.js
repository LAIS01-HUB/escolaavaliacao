require("dotenv").config();

const express = require("express");
const cors = require("cors");

const professorRotas =
require("./src/routes/professor.routes");
const turmaRotas =
require("./src/routes/turma.routes");
const atividadeRotas =
require("./src/routes/atividade.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(professorRotas);
app.use(turmaRotas);
app.use(atividadeRotas);

const porta =
process.env.PORT_APP || 3000;

app.listen(porta, () => {

    console.log(
        `Online na porta ${porta}`
    );

});