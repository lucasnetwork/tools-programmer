import { A, useLocation } from '@solidjs/router';

function DefaultLayout(props) {
	const location = useLocation();

	return (
		<div class="flex h-full w-full">
			<aside class="w-full max-w-48 flex flex-col h-full   ">
				<div class="bg-darkII p-4">
					<p class="text-white">Ferramentas</p>
				</div>
				<div class="bg-darkI flex-1 flex flex-col">
					<A
						href="/cpf"
						class={`text-white p-4 hover:bg-darkII ${location.pathname.includes('cpf') ? 'bg-darkIII' : ''}`}
					>
						Cpf
					</A>
					<A
						href="/cnpj"
						class={`text-white p-4 hover:bg-darkII ${location.pathname.includes('cnpj') ? 'bg-darkIII' : ''}`}
					>
						cnpj
					</A>
					<A
						href="/convert-numbers"
						class={`text-white p-4 hover:bg-darkII ${location.pathname.includes('convert-numbers') ? 'bg-darkIII' : ''}`}
					>
						Conversor de números
					</A>
					<A
						href="/generate-rg"
						class={`text-white p-4 hover:bg-darkII ${location.pathname.includes('generate-rg') ? 'bg-darkIII' : ''}`}
					>
						Gerar rg
					</A>
				</div>
			</aside>
			<div class="flex-1 flex items-center flex-col gap-y-4 self-stretch  ">
				<div class="w-full max-w-screen-xl flex flex-col  flex-1">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
