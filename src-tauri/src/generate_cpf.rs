
use rand::Rng;
fn dig(n1: &str, n2: &str, n3: &str, n4: Option<&str>) -> u8 {
    let mut nums = n1.to_string();
    nums.push_str(n2);
    nums.push_str(n3);

    let mut x: u16 = 0;
    let mut i = 10;
    if n4 != None {
        i = 11;
        nums.push_str(n4.expect("reason"));
    }
    let nums_array: Vec<&str> = nums.split("").filter(|&x| !x.is_empty()).collect();

    for number in nums_array.into_iter() {
        if i >= 2 {
            let value= number.parse::<u16>().unwrap();
            x += value * i;
        }
        i -= 1;
    }

    let rest: u8 = (x % 11).try_into().unwrap();
    if rest < 2 {
        0
    } else {
        11 - rest
    }
}

#[tauri::command]
pub fn generate_cpf() -> String {
    let mut rng = rand::thread_rng();
    let num1: u16 = rng.gen_range(100..999) ;//aleatorio já devolve string, logo não precisa de toString
    let num2: u16 = rng.gen_range(100..999);
    let num3: u16 = rng.gen_range(100..999);
    let dig1 = dig(
        num1.to_string().as_str(),
        num2.to_string().as_str(),
        num3.to_string().as_str(),
        None,
    ); 
    let dig2 = dig(
        num1.to_string().as_str(),
        num2.to_string().as_str(),
        num3.to_string().as_str(),
        Some(dig1.to_string().as_str()),
    );

    
    format!("{}.{}.{}-{}{}", num1, num2, num3, dig1, dig2)
}
    
