(function() {
    "use strict";

    var ads = [];
    var item = {"classic" : "269.99", "standout" : "322.99", "premium" : "394.99" }

// Unilever - 3 for 2 Classic Ads
// Apple - Discount on Standout Ads -(condition)-> 299.99/ads
// Nike - Discount on Premium Ads -(condition)-> 4/more purchase, 379.99/ads 
// Ford - 
// 1) 5 for 4 Classic Ads, 
// 2) discount on Standout Ads -(condition)-> 309.99/ads
// 3) discount on Premium Ads -(condition)-> 3/more purchase, 389.99/ads

    function checkout() {
        // calculate logic from specific client
        this.discount = function() {

            },
            // accept item, return push item in array
            this.add = function(item) {
                ads.push(item);
            },
            // accept array from this.add, return sum
            this.total = function() {
                var total = ads.reduce(function(a, b) {
                    return a + b;
                }, 0);
                return total;
            },
            this.calculateCost = function(){

            }
    }

}());
