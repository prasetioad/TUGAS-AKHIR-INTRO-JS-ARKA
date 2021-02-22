function balikKata (a) {
    let d = a.split(' ');
    let c = '';
    let g = []
    for(i=d.length; i > 0 ; i--){
        g.push(d[i-1]);
    }
    c = g.join(' ');
    console.log(c);
}

balikKata('Saya belajar JavaScript');