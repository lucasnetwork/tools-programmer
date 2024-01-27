import GenerateCPF from './components/GenerateCpf';
import ValidateCpf from './components/ValidateCpf';

function Cpf() {
	return (
		<div class="w-full flex-1 flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Cpf</h1>
			<GenerateCPF />
			<ValidateCpf />
		</div>
	);
}

export default Cpf;
