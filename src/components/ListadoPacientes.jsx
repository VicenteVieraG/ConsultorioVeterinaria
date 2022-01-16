import Paciente from "./Paciente"
import {useId} from "react-id-generator"

function ListadoPacientes({pacientes,setPaciente,}) {
    const id=useId();

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes.length !==0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold break-normal">Pacientes y Citas</span>
                    </p>
        
                    {pacientes.map(pacientes => <Paciente key={id} paciente={pacientes} setPaciente={setPaciente}/>)}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {""}
                        <span className="text-indigo-600 font-bold break-normal">En este lugar</span>
                    </p>
                </>
            ) }

            
        </div>
    )
}

export default ListadoPacientes
