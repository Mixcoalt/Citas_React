//import { useEffect } from 'react'
import Paciente from './Paciente'




const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {

   /* useEffect(() => {
    if (pacientes.length > 0) {
        console.log('Nuevo Paciente')
    }
    }, [pacientes])*/
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                  <h2 className="font-black text-3xl text-center mt-6">
                  Listado Pacientes
                  </h2>
                  <p className="text-xl text-center mt-5 mb-10">
                      Administra tus {''}
                      <span className="font-bold text-indigo-700 ">
                          Pacientes y Citas
                      </span>
                  </p>
      
                  {pacientes.map((paciente) =>(
                    <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente = {eliminarPaciente}
      
                    /> 
                  ))}
                </>
            ) : (
                <>
                 <h2 className="font-black text-3xl text-center mt-6">
                  No hay Pacientes
                  </h2>
                  <p className="text-xl text-center mt-5 mb-10">
                      Comienza agregando pacientes {''}
                      <span className="font-bold text-indigo-700 ">
                          y aparaceran en este apartado
                      </span>
                  </p>
                </>
            )
            
        }
         

             
        </div>
    );
};

export default ListadoPacientes;