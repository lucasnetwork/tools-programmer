
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "linux")]
mod generate_cpf;
mod generate_cnpj;
mod validate_cpf;
mod validate_cnpj;
#[path = "./convertNumbers/decimal_to_number.rs"]
mod decimal_to_number;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_cpf::generate_cpf,generate_cnpj::generate_cnpj,validate_cpf::validate_cpf,validate_cnpj::validate_cnpj,decimal_to_number::decimal_to_binary,decimal_to_number::decimal_to_octal,decimal_to_number::decimal_to_hex])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
