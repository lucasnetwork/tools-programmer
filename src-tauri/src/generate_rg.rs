use std::{ffi::OsStr, io::{Cursor, Read, Write}};
use image::{ ImageBuffer,};
use base64::{engine::general_purpose, Engine as _};
struct Position{
    x:u32,
    y:u32,
}


#[tauri::command]
pub fn generate_rg() ->String{
    let size = 480;
    let mut img = ImageBuffer::new(size, 325);
    let center = size/2;
    println!("{}",center);
    let initialPositionName =Position{
        x:center-50,
        y:0,
    };
    let finalPositionName =Position{
        x:center+50,
        y:0,
    };

    for n in initialPositionName.x ..=finalPositionName.x{
        for i in 0..10{
            let pixel = img.get_pixel_mut(n, i);
            *pixel = image::Rgb([255 as u8, 255 as u8, 255 as u8]);

        }
    }
    let mut bytes: Vec<u8> = Vec::new();
    img.write_to(&mut Cursor::new(&mut bytes), image::ImageOutputFormat::Png).unwrap();
    general_purpose::STANDARD.encode(bytes)
}
    