import { invoke } from '@tauri-apps/api';
import { createEffect, createSignal } from 'solid-js';
import Button from '../../../components/Button';
import { writeText } from '@tauri-apps/api/clipboard';
import { AiOutlineReload } from 'solid-icons/ai';
import toast from 'solid-toast';
import { BiRegularCopy } from 'solid-icons/bi';

function GenerateCNPJ() {
	const [cnpj, setCNPJ] = createSignal('000.000.000-00');
	const getCNPJ = async () => {
		const response = await invoke<string>('generate_cnpj');
		setCNPJ(response);
	};
	const copyCNPJ = async () => {
		await writeText(cnpj());
		toast.success('cnpj copiado');
	};
	createEffect(() => {
		async function callback() {
			const response = await invoke<string>('generate_cnpj');
			setCNPJ(response);
		}
		void callback();
	});
	return (
		<div class=" flex flex-col ">
			<h1 class="text-white text-5xl mt-5 text-center">Gerar cnpj</h1>
			<div class="flex-1 flex flex-col mt-4">
				<div class="gap-x-8 flex mb-4 ">
					<button type="button" onClick={getCNPJ}>
						<AiOutlineReload color="#fff" size={32} />
					</button>
					<p class="text-white text-3xl ">{cnpj()}</p>
					<button type="button" onClick={copyCNPJ}>
						<BiRegularCopy color="#fff" size={32} />
					</button>
				</div>
			</div>
			<div class="flex-1" />
		</div>
	);
}

export default GenerateCNPJ;
