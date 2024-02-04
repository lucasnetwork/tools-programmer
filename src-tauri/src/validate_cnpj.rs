
use regex::Regex;

#[tauri::command]
pub fn validate_cnpj(value_cnpj:String)-> Result<bool,bool>{

    let array_number = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
    let cnpj_string = value_cnpj.as_str();
    
    let re = Regex::new(r"\d+").unwrap();
    if re.find(cnpj_string).is_none(){
        return Err(false)
    }
    let cpf:Vec<&str> =re.find_iter(cnpj_string).map(|mat| mat.as_str()).collect();
    let cpf_joined =  cpf.join("");
    let cpf_only_numbers_string: &str =cpf_joined.as_str();
    if cpf.is_empty() {
        return Err(false)
    }
    if cpf_only_numbers_string.len() > 14 ||cpf_only_numbers_string.len() <14{
        return Err(false)
    }

    let mut n =0;
    let mut condition = 0;

    for i in 0..12{
        n +=cpf_only_numbers_string.chars().nth(i).unwrap().to_string().parse::<u32>().unwrap() * array_number[i+1]
    }
    n = n%11;
    if n>= 2{
        condition =11-n;
    }
    if cpf_only_numbers_string.chars().nth(12).unwrap().to_string().parse::<u32>().unwrap() !=condition{
        return Err(false)
    }
    n = 0;
    for i in 0..=12{
        n +=cpf_only_numbers_string.chars().nth(i).unwrap().to_string().parse::<u32>().unwrap() * array_number[i]
    }
    let mut condition = 0;
    n = n%11;
    if n>= 2 {
        condition =11-n;
    }
    if cpf_only_numbers_string.chars().nth(13).unwrap().to_string().parse::<u32>().unwrap() !=condition{
        return Err(false)

    }
    Ok(true)
}