The idea is, to put all settings in a Javascript object - model/settings.js

The settings will be updated on checkout (push into the object).

This object will become a reference to calculate the pricing.

#How it works
1) instantiate checkout
2) push setting into object created on 1
3) add more item into object by invoking .add() method
4) calculate total, together with pricing rules on .total() method

#Notes
1) Please install dependencies -> bower install
2) For better experience, use vue.js 2 way binding to summarize purchase