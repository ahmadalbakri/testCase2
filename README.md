The idea is, to put all settings in a Javascript object - model/data.js

This object will become a reference to calculate the pricing.

#How it works
1. Instantiate checkout()
2. Push setting into object created on 1
3. Add more item into object by invoking .add() method
4. Calculate total, together with pricing rules on .total() method

#Notes
1. Please install dependencies -> bower install
2. For better experience, use vue.js 2 way binding to summarize purchase