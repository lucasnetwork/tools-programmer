import { invoke } from "@tauri-apps/api";
import { createSignal } from "solid-js";
import Button from "../components/Button";
import { writeText } from '@tauri-apps/api/clipboard';
import { message } from '@tauri-apps/api/dialog';
function GenerateCPF() {
  const [cpf,setCpf] = createSignal("000.000.000-00")
const getCpf = async () =>{
  const response = await invoke<string>("generate_cpf")
  setCpf(response)
}

  return (
     
     <div class="w-full flex-1">
     <p class="text-white text-6xl">{cpf()}</p>
      <div class="w-full gap-x-8 justify-center flex mt-8 ">
      <Button onClick={getCpf}>Gerar Cpf</Button>
      <Button onClick={async()=>{
        await writeText(cpf());
        await message('Cpf copiado', 'Tauri');
      }}>Copiar</Button>
      </div>
     </div>

  );
}

export default GenerateCPF;
