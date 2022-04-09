// 1. CICLO
console.log("------ CICLO ------"); 

let services_items = [
    "Creative Direction",
    "Film",
    "Digital Retouch",
    "Web Design",
    "Photography"
];

for (let i = 0; i < services_items.length; i++) {
    console.log(services_items[i]);
}


// 2. SIMULADOR INTERACTIVO 
console.log("------ SIMULADOR INTERACTIVO ------");

class portfolio_stock {
    constructor(name, year, series, stock){
        this.name = name;
        this.year = year;
        this.series = series;
        this.stock = stock;
    }
}

let portfolio_1 = new portfolio_stock("portfolio_1", ["2020"], ["Brunswick"], 0);
let portfolio_2 = new portfolio_stock("portfolio_2", ["2020", "2021"],["Brunswick"], 2);
let portfolio_3 = new portfolio_stock("portfolio_3", ["2021"], ["Brunswick", "FargStudios"], 1);
let portfolio_4 = new portfolio_stock("portfolio_4", ["2022"], ["IndianCreek"], 3);

console.log(portfolio_1);
console.log(portfolio_2.year[1]);


let portfolio_catalogo = [portfolio_1, portfolio_2, portfolio_3, portfolio_4];


console.log("This is our image catalogue. \nChoose the image you want to purchase:");

for (let i = 0; i<portfolio_catalogo.length; i++){
    console.log(`${i} ${portfolio_catalogo[i].name}`);
}

let cart = [];
console.log(cart);

let selected = prompt("Choose the image you want to purchase");

function purchase(i) {
    if(portfolio_catalogo[i].stock != 0){
        cart.push(portfolio_catalogo[i]);
    }
    else{
        alert("The selected image is not available.");
    }
}
    
purchase(selected);
console.log(cart);


// 3. ARRAYS
console.log("------ ARRAY ------");

const portfolio_images = [
    {
        name: "portfolio_1",
        year: 2020,
        series: "Brunswick"
    },
    {
        name: "portfolio_2",
        year: [2020, 2021],
        series: "Brunswick"
    },
    {
        nombre: "portfolio_3",
        year: 2021,
        series: ["Brunswick", "FargStudios"]
    },
    {
        nombre: "portfolio_4",
        year: 2022,
        series: "IndianCreek"
    },
]

console.log(portfolio_images[1].name);
console.log(portfolio_images[2].series[0]);

