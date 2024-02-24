use std::{ io::{Cursor}};
use image::{ ImageBuffer, Rgb,};
use base64::{engine::general_purpose, Engine as _};
struct Position{
    x:u32,
    y:u32,
}
fn blockImage(initialPosition:Position,finalPosition:Position,mut img:ImageBuffer<Rgb<u8>, Vec<u8>>)->ImageBuffer<Rgb<u8>, Vec<u8>>{
    println!("{}",initialPosition.x);
    println!("{}",finalPosition.x);
    for i in initialPosition.x ..finalPosition.x{
        for j in initialPosition.y..finalPosition.y{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([255 as u8, 255 as u8, 255 as u8]);

        }
    }
    img
}


#[tauri::command]
pub fn generate_rg() ->String{
    let sizeX = 480;
    let sizeY = 325;
    let mut img = ImageBuffer::new(sizeX, sizeY);
    let center = sizeX/2;
    let centerY = sizeY/2;
    let initialPositionName =Position{
        x:center-50,
        y:0,
    };
    let finalPositionName =Position{
        x:center+50,
        y:0,
    };
    for i in 0 ..sizeX{
        for j in 0..20{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);

        }
        for j in sizeY-20..sizeY{
            let pixel = img.get_pixel_mut(i, j);
            *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);

        }
        if(i <20){
            for j in 20..sizeY-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);
    
            }
        }
        if(i>sizeX-20){
            for j in 20..sizeY-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 100 as u8, 0 as u8]);
    
            }
        }
        if i >= 20 && i <=sizeX-20{
            for j in 20..sizeY-20{
                let pixel = img.get_pixel_mut(i, j);
                *pixel = image::Rgb([0 as u8, 255 as u8, 0 as u8]);
    
            }
        }
    }
    for n in initialPositionName.x ..=finalPositionName.x{
        for i in 0..20{
            let pixel = img.get_pixel_mut(n, i);
            *pixel = image::Rgb([255 as u8, 255 as u8, 255 as u8]);

        }
    }

    let mut newImage =blockImage(Position{
        x:20,
        y:centerY-40
    },
    Position{
        x:center-20,
        y:centerY+60
    }
    ,img);
    let mut newImage2 =blockImage(Position{
        x:center+20,
        y:centerY-40
    },
    Position{
        x:sizeX-20,
        y:centerY+60
    }
    ,newImage);
    let mut bytes: Vec<u8> = Vec::new();
 
    newImage2.write_to(&mut Cursor::new(&mut bytes), image::ImageOutputFormat::Png).unwrap();
    general_purpose::STANDARD.encode(bytes)
}
    