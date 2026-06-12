const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe?.user;

const userCard = document.getElementById("userCard");

if(user){
    userCard.innerHTML = `
        👤 ${user.first_name}
        ${user.last_name || ""}
    `;
}else{
    userCard.innerHTML = "Открыто вне Telegram";
}

const gifts = [
    {
        name:"Diamond Gift",
        rarity:"Legendary",
        image:"https://placehold.co/400x250"
    },
    {
        name:"Golden Bear",
        rarity:"Epic",
        image:"https://placehold.co/400x250"
    },
    {
        name:"Cyber Rose",
        rarity:"Rare",
        image:"https://placehold.co/400x250"
    },
    {
        name:"NFT Dragon",
        rarity:"Mythic",
        image:"https://placehold.co/400x250"
    }
];

const grid = document.getElementById("giftGrid");

gifts.forEach(gift=>{
    grid.innerHTML += `
        <div class="card">
            <img src="${gift.image}">
            <h4>${gift.name}</h4>
            <span>${gift.rarity}</span>
        </div>
    `;
});