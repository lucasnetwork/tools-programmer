import { invoke } from '@tauri-apps/api';
import { createEffect, createSignal } from 'solid-js';
import { AiOutlineReload } from 'solid-icons/ai';
import { writeText } from '@tauri-apps/api/clipboard';
import toast from 'solid-toast';
import { BiRegularCopy } from 'solid-icons/bi';
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

	createEffect(() => {
		async function callback() {
			const response = await invoke<string>('generate_cpf');
			setCpf(response);
		}
		void callback();
	});

	return (
		<div class=" flex flex-col ">
			<h2 class="text-white text-5xl mt-5 ">Gerar Cpf</h2>
			<div class="flex-1 flex flex-col mt-4 ">
				<div class="gap-x-8 flex mb-4 ">
					<button type="button" onClick={getCpf}>
						<AiOutlineReload color="#fff" size={32} />
					</button>
					<p class="text-white text-3xl  ">{cpf()}</p>
					<button type="button" onClick={copyCpf}>
						<BiRegularCopy color="#fff" size={32} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default GenerateCPF;
