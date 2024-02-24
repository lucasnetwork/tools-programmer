import { invoke } from '@tauri-apps/api';
import { createEffect, createSignal } from 'solid-js';

function GenerateRG() {
	const [image, setImage] = createSignal('');
	createEffect(() => {
		async function callback() {
			const response = await invoke<string>('generate_rg');
			setImage(`data:image/png;base64, ${response}`);
		}
		void callback();
	});

	return (
		<div class=" flex flex-col ">
			<img src={image()} />
		</div>
	);
}

export default GenerateRG;
