
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "linux")]
mod generate_cpf;
mod generate_cnpj;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_cpf::generate_cpf,generate_cnpj::generate_cnpj])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
