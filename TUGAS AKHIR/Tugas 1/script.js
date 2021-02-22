  
function cekPalindrom(x){
    let z = '';
    for(i = x.length; i > 0; i--){
        z += x[i-1].toLowerCase();
    }
    let hasil = x.toLowerCase();
    if(hasil == z){
        console.log('Palindrom!')
    } else {hasil
        console.log('Bukan Palindrom');
    }
}
cekPalindrom('Malam');