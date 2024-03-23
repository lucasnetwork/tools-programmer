import { createSignal, For } from 'solid-js';
import { invoke } from '@tauri-apps/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

function GenerateUUIDS() {
	const [text, setText] = createSignal('');
	const [result, setResult] = createSignal<string[]>([]);
	async function callback() {
		const response = await invoke<string[]>('generate_uuids', {
			qtd: Number(text()),
		});
		setResult(response);
	}
	return (
		<div class="w-full flex-1 flex flex-col px-4">
			<h1 class="text-white text-6xl mt-5 text-center mb-4">
				Conversor de Números
			</h1>
			<p class="text-white text-lg">Adicione o número</p>
			<Input value={text()} onInput={(e) => setText(e.target.value)} />
			<Button type="button" onClick={callback}>
				Criar uuids
			</Button>
			<div class="mt-10 flex flex-col gap-y-4 gap-x-4">
				<For each={result()}>
					{(item, index) => (
						<div class="flex gap-x-4 ">
							<p class="text-white">{index() + 1}:</p>
							<p class="text-white">{item}</p>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}

export default GenerateUUIDS;
