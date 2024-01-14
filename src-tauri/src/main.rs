// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use rand::Rng;


//o quarto parametro(n4) só será recebido para o segundo digito
fn dig(n1:&str, n2:&str, n3:&str,n4:Option<&str>) ->u32{ 
  
  //as concatenações todas juntas uma vez que são curtas e legíveis
  let mut nums = n1.to_string();
  nums.push_str(n2);
  nums.push_str(n3);
   
  //o j é também iniciado e incrementado no for para aproveitar a própria sintaxe dele
  //o i tem inicios diferentes consoante é 1º ou 2º digito verificador
  let mut x:u32=0;
  let mut i = 10;
  if n4 != None{
    i =11;
    print!("tes");
    nums.push_str(n4.expect("reason"));
  }
  let nums_array:Vec<&str> = nums.split("").filter(|&x| !x.is_empty()).collect();
 
  for j in nums_array.into_iter() {
    if i>=2{

        let value:u32 = j.parse::<u32>().unwrap();
        x +=value  * i;

    }
    i-=1;
    }
  
  let y:u32 = x % 11;
  if y < 2{
    0
  }else{
      11-y
  }
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn generate_cpf() -> String {
    let mut rng = rand::thread_rng();
    let num1 : u16 = rng.gen_range(0..999);//aleatorio já devolve string, logo não precisa de toString
    let num2: u16 =rng.gen_range(0..999);
    let num3: u16 =rng.gen_range(0..999);
    let dig1 = dig(num1.to_string().as_str(), num2.to_string().as_str(), num3.to_string().as_str(),None); //agora só uma função dig
    let dig2 = dig(num1.to_string().as_str(), num2.to_string().as_str(), num3.to_string().as_str(), Some(dig1.to_string().as_str())); //mesma função dig aqui
  
    //aqui com interpolação de strings fica bem mais legivel
    format!("{}.{}.{}-{}{}",num1,num2,num3,dig1,dig2)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_cpf])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
