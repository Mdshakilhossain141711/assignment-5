const seats = document.querySelectorAll("#seat");

function increment(id) {
    var seatCount = document.getElementById(id);
    var counterSeat = parseInt(seatCount.innerText);
    var counterSeat = counterSeat + 1;
    var totalSet = seatCount.innerText = counterSeat;
    return totalSet;
}

function decrement(id) {
    var totalSeat = document.getElementById(id);
    var counterSeat = parseInt(totalSeat.innerText);
    var counterSeat = counterSeat - 1;
    var totalSet = totalSeat.innerText = counterSeat;
    return totalSet;
}


for (let seat of seats) {
    var clickValue = [];
    seat.addEventListener("click", function (e) {
        var btnValue = e.target.innerText;

        if (clickValue.includes(btnValue)) {
            alert(`THE ${btnValue} SEATS IS ALREADY YOU BOOKING`);
        } else if (clickValue.length < 4) {
            clickValue.push(btnValue);
            e.target.classList.add("bg-[#1DD100]");
            e.target.innerText
            increment("seatCount");
            decrement("totalSeat");

        }


    })









}