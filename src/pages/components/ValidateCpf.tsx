import { createSignal } from 'solid-js';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { invoke } from '@tauri-apps/api';
import toast from 'solid-toast';
function ValidateCpf() {
	const [cpf, setCpf] = createSignal('');
	const onSubmit = async (
		e: Event & {
			submitter: HTMLElement;
		} & {
			currentTarget: HTMLFormElement;
			target: Element;
		},
	) => {
		e.preventDefault();
		try {
			const response = await invoke('validate_cpf', {
				valueCpf: cpf(),
			});
			console.log(response);
			toast.success('Cpf válido');
		} catch {
			toast.error('Cpf inválido');
		}
	};

	return (
		<div class=" flex flex-col ">
			<h2 class="text-white text-5xl mt-5 mb-5 ">Validar Cpf</h2>
			<form class="flex-1 flex flex-col  justify-center" onSubmit={onSubmit}>
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
