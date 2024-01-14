import { invoke } from "@tauri-apps/api";
import { createSignal } from "solid-js";
import Button from "./components/Button";

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
      <div class="flex-1 flex items-center flex-col gap-y-4 self-stretch">
      <p class="text-white text-9xl">{cpf()}</p>
      <div class="flex-1 items-center justify-center self-stretch">
      <Button onClick={getCpf}/>
      </div>

      </div>
    </div>
  );
}

export default App;
