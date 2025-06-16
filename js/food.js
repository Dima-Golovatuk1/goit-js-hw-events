const food = [
    {
        imege: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
        title: "fish",
    },
    {
        imege: "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg",
        title: "pizza",
    },
    {
        imege: "https://cdn.pixabay.com/photo/2023/08/31/15/42/grill-8225405_1280.jpg",
        title: "barbecue",
    }
]


const foodList = document.getElementById("food-list");

const markUp = food.map(({imege, title}) => `
<li class="food__item card" style="width: 18rem;">
<img src=${imege} class="card-img-top"
    alt=${title}}>
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card’s
        content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</li>
`).join("")

foodList.insertAdjacentHTML("beforeend", markUp)