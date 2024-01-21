
use rand::Rng;
#[tauri::command]
pub fn generate_cnpj() -> String {
    let mut rng = rand::thread_rng();
    let n:u8 = 9;
    let n1 = (rng.gen_range(0.0..1.0) * n as f32).round() as u8;
    println!("{}",n1);
    let n2 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n3 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n4 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n5 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n6 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n7 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n8 = (rng.gen_range(0.0..1.0) * n as f32).round()as u8;
    let n9 = 0;//gera_random(n);
    let n10 = 0;//gera_random(n);
    let n11 = 0;//gera_random(n);
    let n12 = 1;//gera_random(n);
    let mut d1= (n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5) as u16;
    println!("d1{}",d1);
    d1 = 11 - d1%11;
    if d1>=10 {
        d1 = 0;
    }
    let mut d2= (d1*2+(n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6)as u16) as u16;
    println!("d2{}",d2);
    d2 = 11 - d2%11;
    if d2>=10{
        d2 = 0;
    }


    format!("{}{}.{}{}{}.{}{}{}/{}{}{}{}-{}{}", n1,n2, n3,n4,n5, n6,n7,n8, n9,n10,n11,n12, d1,d2)
}
    
