
use regex::Regex;

#[tauri::command]
pub fn validate_cpf(value_cpf:String)-> Result<bool,bool>{

    let mut sum_total:u16;
    let mut rest:u16;
    let cpf_string = value_cpf.as_str();
    
    sum_total = 0;
    let re = Regex::new(r"\d+").unwrap();
    if re.find(cpf_string).is_none(){
        return Err(false)
    }
    let cpf =re.find(cpf_string).unwrap();
    let cpf_only_numbers_string = cpf.as_str();
    let zeros = "00000000000";
    if cpf_only_numbers_string.eq(zeros) || cpf.is_empty() {
        return Err(false)
    }
    if cpf_only_numbers_string.len() > 11 ||cpf_only_numbers_string.len() <11{
        return Err(false)
    }
    for n in 1..=9{
      sum_total += cpf_only_numbers_string[n-1..n].parse::<u16>().unwrap() * (11 - n) as u16;
    }

    rest = (sum_total * 10) % 11;
  
    if rest == 10 || rest == 11 {

        rest = 0;
    }
    if rest != cpf_only_numbers_string[9..10].parse::<u16>().unwrap() {

        return Err(false)
    }
  
    sum_total = 0;
    for n in 1..=10{
      sum_total += cpf_only_numbers_string[n-1..n].parse::<u16>().unwrap() * (12 - n) as u16;
    }
    rest = (sum_total * 10) % 11;
  
    if rest == 10 || rest == 11 {
        rest = 0;
    }
    if rest != cpf_only_numbers_string[10..11].parse::<u16>().unwrap() {
        return Err(false)
    }
    Ok(true)
}