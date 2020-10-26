var Paciente = require('./src/Paciente');
var Consulta = require('./src/Consulta');

var novoPaciente = Paciente("João", 27, 66, 1.70);

var novaConsulta = Consulta(novoPaciente, ['proc1','gesso','raio-x'], false, false);

console.log(" A consulta do Paciente João custa " + novaConsulta.preco());