    switch (company.id) {
        case 1:
            name = "Unilever";
            settings = data.settings[0];
            break;
        case 2:
            name = "Apple";
            settings = data.settings[1];
            break;
        case 3:
            name = "Nike";
            settings = data.settings[2];
            break;
        case 4:
            name = "Ford";
            settings = data.settings[3];
            break;
    };
    var pricingRules = [];
    // push company setting into array
    pricingRules.push(data.settings);

    function checkout(pricingRules) {
        this.add = function(item) {
                pricingRules.push(item);
            },
            this.total = function() {
                // logic and total calculation of the ads
                $.each(pricingRules, function(index, value) { // var d = {"id":1, "count": 3};
                    console.log(value);
                });
            }
    };

    // Instantiate checkout
    var d = new checkout(pricingRules);

    $(document).ready(function() {
        // append company Name
        $('#companyName').append(name);
    });