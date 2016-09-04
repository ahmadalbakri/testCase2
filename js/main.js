    switch (company.id) {
        case 1:
            settings = data.settings[0]; // Unilever
            break;
        case 2:
            settings = data.settings[1]; // Apple
            break;
        case 3:
            settings = data.settings[2]; // Nike
            break;
        case 4:
            settings = data.settings[3]; // Ford
            break;
    };

    var finalPrice = [];
    var pricingRules = [];
    pricingRules.push(settings); // push company setting into array

    function checkout(pricingRules) {
        this.add = function(item) {
                pricingRules.push(item);
            },
            this.total = function() {
                // total calculation - ads up finalPrice array
                var total = finalPrice.reduce(function(a, b) {
                    return a + b;
                }, 0);
                alert(Math.floor(total));
            }
    };

    // Instantiate checkout
    var d = new checkout(pricingRules);
