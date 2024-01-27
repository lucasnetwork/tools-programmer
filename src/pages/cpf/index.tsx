import GenerateCPF from './components/GenerateCpf';

function Cpf() {
	return (
		<div class="w-full flex-1 justify-between flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Cpf</h1>
			<GenerateCPF />
		</div>
	);
}

export default Cpf;
