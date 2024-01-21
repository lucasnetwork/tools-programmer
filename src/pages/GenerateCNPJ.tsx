import { invoke } from '@tauri-apps/api';
import { createSignal } from 'solid-js';
import Button from '../components/Button';
import { writeText } from '@tauri-apps/api/clipboard';
import toast from 'solid-toast';
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
	return (
		<div class="w-full flex-1 justify-between flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Gerar cnpj</h1>
			<div class="flex-1 flex flex-col items-center justify-center">
				<p class="text-white text-6xl text-center border-b border-b-red-700">
					{cnpj()}
				</p>
				<div class="w-full gap-x-8 justify-center flex mt-8 ">
					<Button onClick={getCNPJ}>Gerar cnpj</Button>
					<Button onClick={copyCNPJ}>Copiar</Button>
				</div>
			</div>
			<div class="flex-1" />
		</div>
	);
}

export default GenerateCNPJ;
