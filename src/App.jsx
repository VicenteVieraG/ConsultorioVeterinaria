import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";
import {useState} from "react";

function App() {
	const [pacientes,setPacientes]=useState([]);

	const tuv = (valor) => console.log(valor);
	return (
		<div className="container mx-auto mt-20">
			<Header
				tuv={tuv}
			/>
			<div className="mt-12 md:flex">
				<Formulario/>
				<ListadoPacientes/>
			</div>
		</div>
	)
}

export default App



  
