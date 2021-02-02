"use strict";
class address {
    constructor(_zip) {
        this._zip = _zip;
        this.address =
            {
                '079-1100': {
                    'prefecture': '北海道',
                    'city': '小樽市'
                },
                '440-0832': {
                    'prefecture': '愛知県',
                    'city': '豊橋市'
                }
            };
    }
    get zip() {
        return this._zip;
    }
    set zip(value) {
        this._zip = value;
    }
    getaddress() {
        let here = this.address[this.zip];
        return `${here.prefecture}${here.city}`;
    }
}
let myaddress = new address('440-0832');
myaddress.zip = '079-1100';
console.log(myaddress.zip);
console.log(myaddress.getaddress());
// let myaddress = new address('440-0832');
//  console.log(myaddress.getaddress());
