import { invoke } from "@tauri-apps/api";
import { createSignal } from "solid-js";
import Button from "./components/Button";
import { writeText } from '@tauri-apps/api/clipboard';
import { message } from '@tauri-apps/api/dialog';
function App() {
  const [cpf,setCpf] = createSignal("000.000.000-00")
const getCpf = async () =>{
  const response = await invoke<string>("generate_cpf")
  setCpf(response)
}

  return (
    <div class="flex h-full w-full">
      <aside class="w-full max-w-48 flex flex-col h-full   ">
        <div class="bg-darkII p-4">
            <p class="text-white">Ferramentas</p>
        </div>
        <div class="bg-darkI flex-1">
        <button class="text-white">Cpf</button>

        </div>
      </aside>
      <div class="flex-1 flex items-center flex-col gap-y-4 self-stretch  ">
      <h1 class="text-white text-6xl mt-5">Gerar Cpf</h1>
     <div class="w-full max-w-screen-xl flex flex-col items-center justify-center flex-1">
     <p class="text-white text-6xl">{cpf()}</p>
      <div class="w-full gap-x-8 justify-center flex mt-8 ">
      <Button onClick={getCpf}>Gerar Cpf</Button>
      <Button onClick={async()=>{
        await writeText(cpf());
        await message('Cpf copiado', 'Tauri');
      }}>Copiar</Button>
      </div>
     </div>

      </div>
    </div>
  );
}

export default App;
