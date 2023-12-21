type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO1
console.log("APARTADO 1");

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            console.log(pacientes[i]);
        }
      
    }
    return pacientes;
};

obtenPacientesAsignadosAPediatria(pacientes);

//APARTADO1.1
console.log("APARTADO 1.1");

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            console.log(pacientes[i]);
        }
      
    }
    return pacientes;
};

obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);

//APARTADO2 no sale ninguno porque no existe esas condiciones
console.log("APARTADO 2");
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProctolo = true;
      console.log(pacientes[i]);
    }

  }

  return activarProctolo;
};

activarProtocoloUrgencia(pacientes);

//APARTADO3
console.log ("APARTADO 3")
/*const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
      console.log(pacientes[i]);
    }
  }
  return pacientes;
};

reasignaPacientesAMedicoFamilia(pacientes);*/

let especialidadModificada: Pacientes;
let indicepacientes = -1;
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
          indicepacientes = i;
          especialidadModificada = {
            ...pacientes[i],
            especialidad: "Medico de familia",
          };
          console.log(especialidadModificada);

          }
            
        }
    
    return pacientes;
    
    
};


reasignaPacientesAMedicoFamilia(pacientes);

//APARTADO4 : depende si cambio la lista original o no
console.log("APARTADO 4");

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      console.log ("Hay pacientes de pediatria");
      return true;
      
    }
  }
  console.log("No hay pacientes de pediatria");
  return false;
};

HayPacientesDePediatria(pacientes);

//APARTADO5
console.log ("APARTADO 5");
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

  let medicoDeFamilia = 0;
  let pediatria = 0;
  let cardiologia = 0;
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      medicoDeFamilia = medicoDeFamilia + 1;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      pediatria = pediatria + 1;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      cardiologia = cardiologia + 1;
    }
  }
    console.log("Medico de familia: " + medicoDeFamilia);
    console.log("Pediatria: " + pediatria);
    console.log("Cardiologia: " + cardiologia);

  return { medicoDeFamilia, pediatria, cardiologia };

};

cuentaPacientesPorEspecialidad(pacientes);
