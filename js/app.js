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

function off15Percent(value) {
    let number = parseInt(value);
    let discount = (number * 15) / 100;
    let price = number - discount;
    return [price, discount];
}

function off20Percent(value) {
    let number = parseInt(value);
    let discount = (number * 20) / 100;
    let price = number - discount;
    return [price, discount];
}




for (let seat of seats) {
    var clickValue = [];
    var arrayValue = clickValue.length;


    seat.addEventListener("click", function (e) {
        var btnValue = e.target.innerText;
        var arrayValue = clickValue.length;


        if (clickValue.includes(btnValue)) {
            alert(`THE ${btnValue} SEATS IS ALREADY YOU BOOKING`);
        } else if (arrayValue <= 3) {
            clickValue.push(btnValue);
            e.target.classList.add("bg-[#1DD100]");
            increment("seatCount");
            decrement("totalSeat");
            seatList(btnValue);
            price();
            nextBtn();

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
            let grandPrice = document.getElementById("grandPrice");
            var total_price = 0;
            for (let tPrice of ticketPrice) {
                var price = parseInt(tPrice.innerText);
                var total_price = total_price + price;
                var totalPrice = document.getElementById("totalPrice");
                totalPrice.innerText = total_price;
                grandPrice.innerText = total_price;

                if (arrayValue === 1) {
                    const couponInput = document.getElementById("couponInput");
                    const couponBtn = document.getElementById("couponBtn");
                    const discountValue = document.getElementById("discountValue");
                    const couponDiv = document.getElementById("couponDiv");
                    const discountDiv = document.getElementById("discountDiv");
                    const invalid = document.getElementById("invalid");

                    couponInput.removeAttribute("disabled");
                    couponBtn.removeAttribute("disabled");
                    // console.log(couponBtn);

                    couponBtn.addEventListener("click", function () {
                        let couponValue = couponInput.value;
                        if (couponValue === "NEW15") {
                            let discountPrice = off15Percent(total_price);
                            grandPrice.innerText = discountPrice[0];
                            discountValue.innerText = discountPrice[1];
                            couponDiv.classList.add("hidden");
                            discountDiv.classList.remove("hidden");

                        } else if (couponValue === "Couple 20") {
                            let discountPrice = off20Percent(total_price);
                            grandPrice.innerText = discountPrice[0];
                            discountValue.innerText = discountPrice[1];
                            couponDiv.classList.add("hidden");
                            discountDiv.classList.remove("hidden");
                        } else {
                            invalid.classList.remove("hidden");
                        }
                    })
                };
            }
        };




    });


};

const numberInput = document.getElementById("numberInput");

numberInput.addEventListener("keyup", nextBtn)



function nextBtn() {
    const numberInput = document.getElementById("numberInput");
    const nextBtn = document.getElementById("nextBtn");
    const success = document.getElementById("success");
    const work = document.getElementById("work");
    const seatCount = document.getElementById("seatCount").innerText;
    let inputValue = numberInput.value.length;


    // console.log(inputValue.length);


    if (seatCount >= 1 && inputValue >= 1) {

        nextBtn.removeAttribute("disabled");

    } else if (inputValue < 1) {
        nextBtn.setAttribute("disabled", true);
    }


    nextBtn.addEventListener("click", function () {
        success.classList.remove("hidden");
        work.classList.add("hidden");
    });
    success.addEventListener("click", function () {
        work.classList.remove("hidden");
        success.classList.add("hidden");
        location.reload();
    })
};


