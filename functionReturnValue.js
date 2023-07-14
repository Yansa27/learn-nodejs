function sayHello(firstname , lastname) {
    const say = `hello ${firstname} ${lastname}`;
    return say;
}

const result = sayHello('juliansa' , 'apis')

function getFinalValue(value) {
    if (value > 90) {
        return "A";
    }else if (value >= 80) {
        return "B";
    }else if (value >= 70) {
        return "C";
    }else if (value >= 60) {
        return "D";
    }else {
        return "Nice try again";
    }
};


console.log(getFinalValue(80));