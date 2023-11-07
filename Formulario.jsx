import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({Pacientes,setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

   useEffect(() => {
    if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)
    }
   }, [paciente])

    const generarId =() =>{
        const ramdom = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

       return ramdom + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log('Enviando Formulario')

        //valiodacion del formulario

        if([nombre, propietario, email, alta, sintomas].includes('')){
            //console.log('Hay almenos un campo vacio')

            setError(true)
            return
        }
        setError(false)

        //objeto de paciente
        const objetoPaciente ={
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            
        }

        if(paciente.id){
            //Editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = Pacientes.map(pacienteState =>{
                return pacienteState.id === paciente.id ? objetoPaciente
                : pacienteState
            })
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //nuevo Registro
              objetoPaciente.id = generarId()
            setPacientes([...Pacientes, objetoPaciente])
        }       

        //reiniciar el form

        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center mt-6">
                Seguimiento Pacientes</h2>      

            <p className="text-center text-lg mt-6 mb-10">
                Añade Pacientes y {''} 
                <span className="text-indigo-600 font-bold">
                Aministralos</span>    
            </p>      

            <form
                onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">

                {error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mb-6">
                    <label htmlFor="mascota"
                    className="block text-gray-700 font-bold uppercase">
                    Nombre Paciente
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="mascota"
                    type="text" 
                    placeholder="Nombre del paciente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="propietario"
                    className="block text-gray-700 font-bold uppercase">
                    Apellidos
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="propietario"
                    type="text" 
                    placeholder="Apellidos"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email"
                    className="block text-gray-700 font-bold uppercase">
                    Correo Electronico
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="email"
                    type="text" 
                    placeholder="correo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="alta"
                    className="block text-gray-700 font-bold uppercase">
                    Alta
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="alta"
                    type="date" 
                    value={alta}
                    onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="sintoma"
                    className="block text-gray-700 font-bold uppercase">
                    Sintomas Paciente
                    </label>
                    <textarea 
                    className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="sintomas"      
                    placeholder="Sintomas"              
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input className="bg-indigo-700 w-full p-4 shadow-md rounded-md
                text-white uppercase font-bold cursor-pointer hover:bg-green-600
                transition-opacity hover:text-gray-300"
                 type="submit" 
                 value={ paciente.id ? 'Editar Paciente'
                        : 'Agregar Paciente'}
                 />
            </form>
        </div>
    );
};

export default Formulario;