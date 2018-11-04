var name = "Hamizan Rafiqi Azuris"
var old = 17 
var ras ="Asia"

console.log('nama saya ' + name)
console.log('saya berusia ' + old)
console.log('dan saya ras ' + ras)

var x=5
var y=5

console.log('perkalian 5 dengan 5 ' + x*y)

var lokers = ['Anton','siti','anita','doni','joko','dimas','jhon doe']

console.log(lokers[lokers.length - 1])

var hari = 'panas'

    if (hari === 'hujan'){
        console.log('saya membeli Jazz hujan')
    }else {
        console.log('saya membeli Hond* Jazz')
    }

var uang = 5000
var umur = 18

if (uang == 50000 && umur >= 18){
    console.log('Anda bisa membeli 1 botol minuman')
}
else if(uang == 100000 && umur >= 18){
    console.log('Anda bisa membeli 2 botol minuman')
}
else if(uang <= 50000 && umur >=18){
    console.log('Piti ang ndak ado yuang')
}
else{
    console.log('pulanglah ang yuang')
}

var lokers = ['Anton','siti','anita','doni','joko','dimas','jhon doe']
    for(var i = 0; i < lokers.length; i = i + 1)
    console.log(lokers[i])

var students = [
    {
        name: 'Hamizan Rafiqi Azuris',
        address: 'Suliki'
    },
    {
        name: 'Puad',
        address: 'Pincuran'
    },
    {
        name: 'Cinaun',
        address: 'Padang'
    }
]
for(var i = 0; i<students.length; i = i + 1){
    console.log('Nama :', students[i].name)
    console.log('Alamat :', students[i].address)
}

var students = [
    {
    nis: '170700818',
    name: 'Hamizan Rafiqi Azuris',
    avatar: 'img/hamizan.jpg'
    },
    {
    nis: '170700892',
    name: 'Wafi',
    avatar: 'img/hamizan.jpg'
    },
    {
    nis: '170700899',
    name: 'Lutfi',
    avatar: 'img/hamizan.jpg'
    },
    {
    nis: '170700714',
    name: 'Azim',
    avatar: 'img/hamizan.jpg'
    },
    {
    nis: '170700800',
    name: 'Rizki',
    avatar: 'img/hamizan.jpg'
    },
    {
     nis: '170700803',
    name: 'Danol',
    avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700922',
        name: 'Dika',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700801',
        name: 'Riski',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700781',
        name: 'Arif',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700713',
        name: 'Fuad',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700786',
        name: 'Gia',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700788',
        name: 'Mustafa',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700808',
        name: 'Yogi',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700806',
        name: 'Zandri',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700791',
        name: 'Rayhan',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700823',
        name: 'Farid',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700834',
        name: 'Qolbi',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700838',
        name: 'Wendi',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700757',
        name: 'Ridwan',
        avatar: 'img/hamizan.jpg'
    },
    {
        nis: '170700809',
        name: 'Tio',
        avatar: 'img/hamizan.jpg'
    },
]


function cari() {
//ini untuk proses pencarian ketika tombol ditekan
var ketik = document.getElementById('search').value
for(var i = 0; i < students.length; i = i + 1) {
    if (students[i].nis == ketik) {
        document.getElementById('tampil').textContent = students[i].name
    }
}
}