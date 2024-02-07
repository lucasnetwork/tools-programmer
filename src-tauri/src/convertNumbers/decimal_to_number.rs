
#[tauri::command]
pub fn decimal_to_binary( value: usize) -> String {
    format!("{:b}",value)
}

#[tauri::command]
pub fn decimal_to_octal( value: usize) -> String {
    format!("{:o}",value)
}

#[tauri::command]
pub fn decimal_to_hex( value: usize) -> String {
    format!("{:X}",value)
}