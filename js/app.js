const seats = document.querySelectorAll("#seat");


function increment(id) {
    var seatCount = document.getElementById(id);
    var counterSeat = parseInt(seatCount.innerText);
    var counterSeat = counterSeat + 1;
    var totalSet = seatCount.innerText = counterSeat;
    // return totalSet;
}

function decrement(id) {
    var totalSeat = document.getElementById(id);
    var counterSeat = parseInt(totalSeat.innerText);
    var counterSeat = counterSeat - 1;
    var totalSet = totalSeat.innerText = counterSeat;
    // return totalSet;
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
            increment("seatCount");
            decrement("totalSeat");
            seatList(btnValue);
            price();
            if (clickValue.length === 4) {
                let couponInput = document.getElementById("couponInput");
                let couponBtn = document.getElementById("couponBtn");

                couponInput.removeAttribute("disabled");
                couponBtn.removeAttribute("disabled");
            };
        }


        function seatList() {
            let ticketList = document.getElementById("ticketList");
            ticketList.innerHTML += `
            <ul class="flex justify-between items-center mb-1">
                <li class="text-xl font-medium text-slate-400">
                    ${btnValue}
                </li>
                <li class=" font-medium text-slate-400">
                    Economy
                </li>
                <li id="ticketPrice" class="font-medium text-slate-400">
                    550
                </li>
            </ul>
            `;
        }

        function price() {
            let ticketPrice = document.querySelectorAll("#ticketPrice");
            var total_price = 0;
            for (let tPrice of ticketPrice) {
                var price = parseInt(tPrice.innerText);
                var total_price = total_price + price;
                var totalPrice = document.getElementById("totalPrice");
                totalPrice.innerText = total_price;
            }
        };


    });


}