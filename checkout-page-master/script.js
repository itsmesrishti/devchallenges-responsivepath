
var cartButtons = document.querySelectorAll(".cart-btns");

for (var i = 0; i < cartButtons.length; i++) {
    var btn = cartButtons[i];

    btn.addEventListener('click', function() {
        
        var btnId = this.id;
        
        // for adding items to cart
        if (btnId.includes("plus")) {
            // select and store the current value of element present before the plus button element
            var itemNum = Number(this.previousElementSibling.innerHTML);
            // add and store value to the item present before plus button element
            itemNum += 1;
            this.previousElementSibling.innerHTML = itemNum;

            // select and store the discounted price associated with the item whose plus btn is being clicked 
            var price = Number((this.parentElement.previousElementSibling.querySelector(".discounted-price").innerHTML).slice(1,));
            // select and store the total price and remove the '$' sign present at the start and convert string into number
            var totalPrice = Number(document.querySelector("#total-price").innerHTML.slice(1,));
            // add the discounted price to the total price and change the value of total price
            totalPrice += price;
            document.querySelector("#total-price").innerHTML = '$' + totalPrice.toFixed(2);
        };

        // for subtracting items from cart
        if (btnId.includes("minus")) {
            var itemNum = Number(this.nextElementSibling.innerHTML);
            // since we don't want negative values if statement is used
            if (itemNum > 0) {
                itemNum -= 1;
                this.nextElementSibling.innerHTML = itemNum;
                var price = Number((this.parentElement.previousElementSibling.querySelector(".discounted-price").innerHTML).slice(1,));
                var totalPrice = Number(document.querySelector("#total-price").innerHTML.slice(1,));
                totalPrice -= price;
                document.querySelector("#total-price").innerHTML = '$' + totalPrice.toFixed(2);
            }
        };
    });
}
