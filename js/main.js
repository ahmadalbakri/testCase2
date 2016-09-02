    var ads = []; var pricingRules = [];

    switch (company.id) {
        case 1:
            name = "Unilever";
            settings = settings[0];
            break;
        case 2:
            name = "Apple";
            settings = settings[1];
            break;
        case 3:
            name = "Nike";
            settings = settings[2];
            break;
        case 4:
            name = "Ford";
            settings = settings[3];
            break;
    };
    pricingRules.push(settings);

    function checkout(pricingRules) {
        this.add = function(item) {
            //d.add(1)
            pricingRules.push(item);
        },    
        this.total = function() {
            // get ads count from each ads
            // var d = {"id":1, "count": 3};
            $.each(pricingRules, function(index, value) {
                console.log(value);
            });
        }
    };

    // instantiate checkout
    var d = new checkout(pricingRules);
    
    $(document).ready(function() {        
        $('#companyName').append(name); // append company Name

        $.each(adsDetail, function(index, value) {
            $("#cart").append("<li class='adsDetails'> \
            <div>" + value.title + "</div> \
            <div>" + value.price + "</div> \
            <div>\
                <input type='button' onclick='decrementValue(" + index + ")' value='-' />\
                <input type='text' value=1 maxlength=2 max=10 size=1 id='number" + index + "'/>\
                <input type='button' onclick='incrementValue(" + index + ")' value='+' />\
                <input type='button' onclick='d.add(" + index + ", 3)' value='Add' />\
            </div> \
        </li>");
        });     
    });
