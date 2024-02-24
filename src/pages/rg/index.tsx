import { invoke } from '@tauri-apps/api';
import { createSignal } from 'solid-js';

function GenerateRG() {
	const [image, setImage] = createSignal('');
	async function generateRG() {
		const response = await invoke<string>('generate_rg');
		setImage(`data:image/png;base64, ${response}`);
	}

	return (
		<div class=" flex flex-col ">
			<h1 class="text-white text-6xl mt-5 text-center">Gerar rg</h1>
			<div class="mb-4">
				<button type="button" class="bg-white px-4" onClick={generateRG}>
					Gerar RG
				</button>
			</div>
			<img src={image()} class="w-60" />
		</div>
	);
}

export default GenerateRG;
