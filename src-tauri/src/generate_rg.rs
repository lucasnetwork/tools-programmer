use std::io::Cursor;
use image::{ ImageBuffer, Rgb,};
use base64::{engine::general_purpose, Engine as _};
struct Position{
    x:u32,
    y:u32,
}
fn block_image(initial_position:Position,final_position:Position,mut img:ImageBuffer<Rgb<u8>, Vec<u8>>)->ImageBuffer<Rgb<u8>, Vec<u8>>{
    for i in initial_position.x ..final_position.x{
        for j in initial_position.y..final_position.y{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([255 as u8, 255 as u8, 255 as u8]);

        }
    }
    img
}


#[tauri::command]
pub fn generate_rg() ->String{
    let size_x = 480;
    let size_y = 325;
    let mut img = ImageBuffer::new(size_x, size_y);
    let center = size_x/2;
    let center_y = size_y/2;
    let initial_position_name =Position{
        x:center-50,
        y:0,
    };
    let final_position_name =Position{
        x:center+50,
        y:0,
    };
    for i in 0 ..size_x{
        for j in 0..20{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);

        }
        for j in size_y-20..size_y{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);

        }
        if i <20{
            for j in 20..size_y-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);
    
            }
        }
        if i>size_x-20{
            for j in 20..size_y-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);
    
            }
        }
        if i >= 20 && i <=size_x-20{
            for j in 20..size_y-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 255 as u8, 0 as u8]);
    
            }
        }
    }
    for n in initial_position_name.x ..=final_position_name.x{
        for i in 0..20{
            let pixel = img.get_pixel_mut(n, i);
            *pixel = image::Rgb([255 as u8, 255 as u8, 255 as u8]);

        }
    }

    let new_image =block_image(Position{
        x:20,
        y:center_y-40
    },
    Position{
        x:center-20,
        y:center_y+60
    }
    ,img);
    let new_image2 =block_image(Position{
        x:center+20,
        y:center_y-40
    },
    Position{
        x:size_x-20,
        y:center_y+60
    }
    ,new_image);
    let mut bytes: Vec<u8> = Vec::new();
 
    new_image2.write_to(&mut Cursor::new(&mut bytes), image::ImageOutputFormat::Png).unwrap();
    general_purpose::STANDARD.encode(bytes)
}
    