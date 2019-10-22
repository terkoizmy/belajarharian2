var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
input.splice(1 , 1  ,'Roman Alamsyah elsharawy') 
input.splice(2 , 1 , 'Provinsi Bandar Lampung')
input.splice(3 , 0 , 'pria')
input.splice(5 , 1 , 'SMA Internasional Metro')

let ttl = input[4]
let ttlsplit = ttl.split('/')
    switch (ttlsplit[1]) {
         case '05':
                console.log('Mei')
            break;

    }
    
    ttlsplit.sort(function(a, b) {return a-b})
    console.log(ttlsplit)

    let ttlJoin = ttlsplit.join('-')
    console.log(ttlJoin)

    let nama = input[1];
    console.log(nama.slice(0,14))
}

dataHandling2(input);





// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"