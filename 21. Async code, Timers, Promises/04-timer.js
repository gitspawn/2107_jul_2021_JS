const promotion = new Date("September 07, 2021 20:00:00");
console.log(promotion);

let p = document.querySelector("p");

let timerId = setInterval(() => {
    let dateNow = Date.now(); // tomestamp
    let distance = promotion - dateNow;

    let days = Math.floor(distance / 1000 / 60 / 60 / 24);

    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    p.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

    if (distance < 0) {
        clearInterval(timerId);
        p.innerHTML = "Акция закончилась";
    }
}, 1000);
