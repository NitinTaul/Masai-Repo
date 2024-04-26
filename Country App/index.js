let cont1 = document.querySelector("#cont1");
let btn = document.querySelector("#btn");
let cont2 = document.querySelector("#cont2");
let select = document.querySelector("#select");

btn.addEventListener("click", function() {
    getData();
});

select.addEventListener("change", function() {
    getData();
});

async function getData() {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${select.value}`;
    let res = await fetch(url);
    let data = await res.json();
    showData(data);
}

function showData(data) {
    cont2.innerHTML = "";
    data.data.forEach((el, i) => {
        let Card = document.createElement("div");
        Card.innerHTML = `
            <h2>Country Name: ${el.country}<h2>
            <p>Id: ${el.id}</p>
            <p>Rank: ${el.Rank}</p>
            <p>Population: ${el.population}</p>
            `;
        cont2.append(Card);
    });
}