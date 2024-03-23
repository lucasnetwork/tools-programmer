import TextArea from '../../components/TextArea';
import { createSignal, createEffect } from 'solid-js';
import { invoke } from '@tauri-apps/api';

function ConvertNumbers() {
	const [text, setText] = createSignal('');
	const [result, setResult] = createSignal({
		binary: '',
		octal: '',
		hex: '',
	});

	createEffect(() => {
		async function callback() {
			const response = await Promise.all([
				invoke<string>('decimal_to_binary', {
					value: Number(text()),
				}),
				invoke<string>('decimal_to_octal', {
					value: Number(text()),
				}),
				invoke<string>('decimal_to_hex', {
					value: Number(text()),
				}),
			]);
			setResult((props) => ({
				binary: response[0],
				hex: response[2],
				octal: response[1],
			}));
		}
		void callback();
	});
	return (
		<div class="w-full flex-1 flex flex-col px-4">
			<h1 class="text-white text-6xl mt-5 text-center mb-4">
				Conversor de Números
			</h1>
			<p class="text-white text-lg">Adicione o número</p>
			<TextArea value={text()} onInput={(e) => setText(e.target.value)} />
			<div class="mt-10 flex flex-col gap-y-4 gap-x-4">
				<p class="text-white">Binario:{result().binary}</p>
				<p class="text-white">Octal:{result().octal}</p>
				<p class="text-white">Hexadecimal:{result().hex}</p>
			</div>
		</div>
	);
}

export default ConvertNumbers;
