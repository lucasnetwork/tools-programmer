import { invoke } from '@tauri-apps/api';
import { createSignal } from 'solid-js';
import Button from '../components/Button';
import { writeText } from '@tauri-apps/api/clipboard';
import toast from 'solid-toast';
function GenerateCPF() {
	const [cpf, setCpf] = createSignal('000.000.000-00');
	const getCpf = async () => {
		const response = await invoke<string>('generate_cpf');
		setCpf(response);
	};
	const copyCpf = async () => {
		await writeText(cpf());
		toast.success('Cpf copiado');
	};
	return (
		<div class="w-full flex-1 justify-between flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Gerar Cpf</h1>
			<div class="flex-1 flex flex-col items-center justify-center">
				<p class="text-white text-6xl text-center border-b border-b-red-700">
					{cpf()}
				</p>
				<div class="w-full gap-x-8 justify-center flex mt-8 ">
					<Button onClick={getCpf}>Gerar Cpf</Button>
					<Button onClick={copyCpf}>Copiar</Button>
				</div>
			</div>
			<div class="flex-1" />
		</div>
	);
}

export default GenerateCPF;
