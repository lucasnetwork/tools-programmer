use uuid::Uuid;

#[tauri::command]
pub fn generate_uuids(qtd: u32) -> Vec<String> {

    let mut list: Vec<String> = Vec::with_capacity(qtd as usize);
    for _ in 0..qtd {
        let uuid = Uuid::new_v4();
        list.push(uuid.to_string());
    }
    list
}