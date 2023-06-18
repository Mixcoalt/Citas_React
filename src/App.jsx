import {useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
//import paciente from './components/paciente'

function App() {
  
  const [Pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = Pacientes.filter(paciente =>{
      return paciente.id !== id
    })
    setPacientes(pacientesActualizados)
  }
  useEffect(() => {
    const obtenerLs = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('Pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLs
  }, [])
  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(Pacientes))
  }, [Pacientes])



  return (
    <div className="container mx-10 mt-20">
      <Header />
      <div className="mt-12 md:flex ">
      <Formulario 
      
      setPacientes = {setPacientes}
      Pacientes = {Pacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
      />
      <ListadoPacientes 
      pacientes = {Pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
