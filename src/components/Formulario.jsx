import {useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes,paciente,setPacientes, setPaciente}) => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(false)
    const [editionMode,setEditionMode]=useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setEditionMode(true)
        }
    }, [paciente])
    
    const handelSubmit= (e) =>{
        e.preventDefault();

        //validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            console.log("Hay almenos un campo vacio")
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(editionMode){
            //modo edicion
            objetoPaciente.id=paciente.id;

            const pacientesActualizados = pacientes.map(p => p.id===paciente.id ? objetoPaciente : p)
            setPacientes(pacientesActualizados);
            setPaciente({})
            setEditionMode(false);
        }else{
            //modo nuevo registro
            objetoPaciente.id= Math.random().toString(36).substr(2)
            setPacientes([...pacientes,objetoPaciente])

        }


        //reiniciar el form
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Paciente y{" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handelSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-10 mb-10">
                {error && <Error mensaje="Todos los campos son obligatorios"/>}
                <div className="mb-5">
                    <label
                        htmlFor="mascota" 
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota" 
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario" 
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email" 
                        className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email" 
                        type="email" 
                        placeholder="Email conacto propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta" 
                        className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas" 
                        className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600  w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md hover:shadow-xl cursor-pointer transition-all"
                    value={editionMode ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario;
