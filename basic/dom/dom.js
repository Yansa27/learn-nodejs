// document.title = 'apis gobles'
const body = document.body

// // append untuk menambahkan value
// body.append('HELLO WORLD')

// // create element
// const h1 = document.createElement('h1');
// h1.textContent = '<marquee>Anjay ini h1 bro</marquee>';


// const namaSaya = document.createElement('p');
// namaSaya.innerHTML ='<marquee>Juliansa</marquee>';


// const namaKamu = document.createElement('b');
// namaKamu.innerText = '<marquee>muzamil</marquee>';

// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2')


btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontsize = '24px'
btn1.style.background = 'tomato'

btn2.style.border = 'none'

// function 
function gantiWarna() {
    btn1.style.background = 'aqua'
    alert('ubah warna ke aqua')
}

function ubahText() {
    btn1.textContent = 'hihi haha'
}

function oriText() {
    btn1.textContent = 'Klik saya'
}
const p = document.createElement('p')
function munculText () {
    
    p.textContent = 'Halo nama saya JULIANSA'
    body.append(p)
}

function ubahwarnaText () {
    p.style.color = 'blue'
}