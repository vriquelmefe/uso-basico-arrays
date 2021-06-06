let radiologiaPacientes = [{
    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa"
  },
  {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-9",
    prevision: "Isapre"
  },
  {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "Isapre"
  },
  {
    hora: "15:30",
    especialista: "Ana MAria Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa"
  },
  {
    hora: "16:00",
    especialista: "Patricio Suazo",
    paciente: "Ramon Ulloa",
    rut: "14989389-k",
    prevision: "Fonasa"
  }
]

let traumatologiaPacientes = [{
    hora: "08:00",
    especialista: "María Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "Fonasa"
  },
  {
    hora: "10:00",
    especialista: "Raul Araya",
    paciente: "Angélica Navas",
    rut: "15444147-9",
    prevision: "Isapre"
  },
  {
    hora: "10:30",
    especialista: "Maria Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre"
  },
  {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre"
  },
  {
    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-K",
    prevision: "Fonasa"
  },
  {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "Isapre"
  },
  {
    hora: "12:30",
    especialista: "Andrés Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre"
  }
]

let dentalPacientes = [{
    hora: "08:00",
    especialista: "Andrea Zuñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "Isapre"
  },
  {
    hora: "11:00",
    especialista: "Maria Zañartu",
    paciente: "Angel Muñoz",
    rut: "9878789-2",
    prevision: "Isapre"
  },
  {
    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "Fonasa"
  },
  {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernandez",
    rut: "18887662-K",
    prevision: "Fonasa"
  },
  {
    hora: "13:30",
    especialista: "Eduardo Viñueka",
    paciente: "hugo Sanchez",
    rut: "17665461-4",
    prevision: "Fonasa"
  },
  {
    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepulveda",
    rut: "14441281-0",
    prevision: "Isapre"
  }
]

var pacientesRad = `<tr>
 <th>Hora</th>
 <th>Espercialista</th>
 <th>Paciente</th>
 <th>Rut</th>
 <th>Previsión</th>
</tr>`;
//ciclo radiologia
for (var i = 0; i < radiologiaPacientes.length; i++) {
  pacientesRad += `
    <tr>
      <td>${radiologiaPacientes[i].hora}</td>
      <td>${radiologiaPacientes[i].especialista}</td>
      <td>${radiologiaPacientes[i].paciente}</td>
      <td>${radiologiaPacientes[i].rut}</td>
      <td>${radiologiaPacientes[i].prevision}</td>
    </tr>
  `
}

document.getElementById("radiologia-tabla").innerHTML = pacientesRad;

document.getElementById("primer-ultimo-rad").innerHTML = (`<p>Primera Atención: ${radiologiaPacientes[0].paciente} - ${radiologiaPacientes[0].prevision} | Última atención: ${radiologiaPacientes[i-1].paciente} - ${radiologiaPacientes[i-1].prevision}</p> <br>`);

//ciclo traumatologia
var pacientesTrau = `<tr>
 <th>Hora</th>
 <th>Especialista</th>
 <th>Paciente</th>
 <th>Rut</th>
 <th>Previsión</th>
</tr>`;
for (var i = 0; i < traumatologiaPacientes.length; i++) {
  pacientesTrau += `
    <tr>
      <td>${traumatologiaPacientes[i].hora}</td>
      <td>${traumatologiaPacientes[i].especialista}</td>
      <td>${traumatologiaPacientes[i].paciente}</td>
      <td>${traumatologiaPacientes[i].rut}</td>
      <td>${traumatologiaPacientes[i].prevision}</td>
    </tr>
  `

}
document.getElementById("traumatologia-tabla").innerHTML = pacientesTrau;
document.getElementById("primer-ultimo-trau").innerHTML = (`<p>Primera Atención: ${traumatologiaPacientes[0].paciente} - ${traumatologiaPacientes[0].prevision} | Última atención: ${traumatologiaPacientes[i-1].paciente} - ${traumatologiaPacientes[i-1].prevision}</p> <br>`);


//cilco dental
var pacientesDen = `<tr>
 <th>Hora</th>
 <th>Especialista</th>
 <th>Paciente</th>
 <th>Rut</th>
 <th>Previsión</th>
</tr>`;
for (var i = 0; i < dentalPacientes.length; i++) {
  pacientesDen += `
    <tr>
      <td>${dentalPacientes[i].hora}</td>
      <td>${dentalPacientes[i].especialista}</td>
      <td>${dentalPacientes[i].paciente}</td>
      <td>${dentalPacientes[i].rut}</td>
      <td>${dentalPacientes[i].prevision}</td>
    </tr>
  `
}

document.getElementById("dental-tabla").innerHTML = pacientesDen;

document.getElementById("primer-ultimo-dental").innerHTML = (`<p>Primera Atención: ${dentalPacientes[0].paciente} - ${dentalPacientes[0].prevision} | Última atención: ${dentalPacientes[i-1].paciente} - ${dentalPacientes[i-1].prevision}</p> <br>`);