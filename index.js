// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(){
    cats.push("Ralph");
};

//destructivelyAppendCat()
console.log(cats);

function destructivelyPrependCat(){
    cats.unshift("Bob");
};

//destructivelyPrependCat()
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.splice(2,1);
};

//destructivelyRemoveLastCat()
console.log(cats);

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
};

//destructivelyRemoveFirstCat()

function appendCat(){
    return [
    ...cats.slice(0),
    "Broom"
];
}

function prependCat(){
    return [
    ...cats.slice(0, 0),
    "Arnold",
    ...cats.slice(0)
];
}

function removeLastCat(){
    return [
        ...cats.slice(0, -1)
    ]
}

function removeFirstCat(){
    return [
        ...cats.slice(1),
        //...cats.slice(1)
    ]
}
