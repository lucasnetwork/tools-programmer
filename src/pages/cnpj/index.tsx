import GenerateCNPJ from './components/GenerateCNPJ';
import ValidateCNPJ from './components/ValidateCNPJ';

function Cnpj() {
	return (
		<div class="w-full flex-1 flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Cpf</h1>
			<GenerateCNPJ />
			<ValidateCNPJ />
		</div>
	);
}

export default Cnpj;
