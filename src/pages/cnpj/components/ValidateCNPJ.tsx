import { createSignal } from 'solid-js';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { invoke } from '@tauri-apps/api';
import toast from 'solid-toast';
function ValidateCnpj() {
	const [cnpj, setCnpj] = createSignal('');
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
			const response = await invoke('validate_cnpj', {
				valueCnpj: cnpj(),
			});
			console.log(response);
			toast.success('cnpj válido');
		} catch {
			toast.error(cnpj());
		}
	};

	return (
		<div class=" flex flex-col ">
			<h2 class="text-white text-5xl mt-5 mb-5 ">Validar cnpj</h2>
			<form class="flex-1 flex flex-col  justify-center" onSubmit={onSubmit}>
				<div>
					<Input value={cnpj()} onChange={(e) => setCnpj(e.target.value)} />
				</div>
				<div class="gap-x-8 flex mt-8 ">
					<Button>Validar cnpj</Button>
				</div>
			</form>
		</div>
	);
}

export default ValidateCnpj;
