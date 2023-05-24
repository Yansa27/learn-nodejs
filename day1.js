// synchronus 

// const getUserSync = (id) => {
     // let nama = '';
     // if(id === 1) {
     //     nama = 'Juliansa';
     // } else {
     //     nama = 'Gatau';
     // }
     // return {id , nama}

     // ! ternary operation
//     const nama = 1 ? 'Juliansa' : 'Gatau';
//     return { id , nama }; 
// };

// const UserSatu = getUserSync(1);
// console.log(UserSatu);

// const UserDua = getUserSync(2);
// console.log(UserDua);

// const halo = 'hello world!' ;
// console.log(halo);

// Asynchronous 

const getUser = (id , cb) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1 ? 'Juliansa' : 'Gatau';
        cb({id , nama});
    }, time);
};

const userSatu = getUser(1 , (hasil) => {
    console.log(hasil);
});

const userDua = getUser (2 , (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World!';
console.log(halo);
