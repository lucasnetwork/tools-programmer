import { createSignal } from 'solid-js';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
function ValidateCpf() {
	const [cpf, setCpf] = createSignal('');

	return (
		<div class=" flex flex-col ">
			<h2 class="text-white text-5xl mt-5 mb-5 ">Validar Cpf</h2>
			<form class="flex-1 flex flex-col  justify-center">
				<div>
					<Input value={cpf()} onChange={(e) => setCpf(e.target.value)} />
				</div>
				<div class="gap-x-8 flex mt-8 ">
					<Button>Validar Cpf</Button>
				</div>
			</form>
		</div>
	);
}

export default ValidateCpf;
