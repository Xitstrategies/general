/**
 * Created by MHEIMBECK on 5/31/14.
 */
//function ABVCalc (og, fg) {
//    return ((og - fg) * 131) + "%";
//}
function getABV (gravity){
    var abv= [];
    $.each( gravity, function(i, val){
        if(val.original){
            abv[0] = gravity.reading;
        } else if(val.final){
            abv[1] = gravity.reading;
        }
    });

    return ((abv[0] - abv[1]) * 131) + "%";
}

var empty = {
        batch: 0,
        name: "",
        boilDate: "2014-01-01",
        wort: [
            {temp: 155, name: "", extract: false, type: "grain", quantity: 0, quantityType: "lbs", steep: true, steepLength: "15 min"},
            {temp: 200, name: "", extract: true, type: "liquid", quantity: 0, quantityType: "lbs"},
            {temp: 200, name: "", extract: true, type: "dry", quantity: 0, quantityType: "lbs"}
        ],
        hops: [
            {order: 0, name: "", quantity: 1, size: "oz", type: "pellet", time: "0 min"}
        ],
        irishMoss: true,
        boilLength: 60, boilLengthType: "min",
        dryHop: [
            {name: "", type: "pellet", quantity: 0, quantityType: "", dateIn: "2014-01-01"}
        ],
        gravity: [/* Needs a good validation that only one original and one final can be true and if original, can not be final, and visa-versa */
            {date: "2014-01-01", original: true, final: false, reading: 1.000, scale: ""}
        ],
        yield:[
            {date: "2014-01-01", quantity: 0, type: "bottle", size: 12, sizeType: "oz", bottlingSugar: true,
                sugar: {type: "corn", quantity: 2, quantityType: "cups", waterQuantity: 2, waterQuantityType: "cups"}
            }
        ],
        abv: getABV(this.gravity)
    },
beers = [{
    batch: 2,
    name: "blue cap",
    boilDate: "2014-03-09",
    wort: [
        {temp: 155, name: "Crystal", extract: false, type: "grain", quantity: 1, quantityType: "lbs", steep: true, steepLength: "15 min"},
        {temp: 155, name: "Cara-Pils", extract: false, type: "grain", quantity: 8, quantityType: "oz", steep: true, steepLength: "15 min"},
        {temp: 200, name: "Pilsen light", extract: true, type: "liquid", quantity: 4, quantityType: "lbs"},
        {temp: 200, name: "Pilsen light", extract: true, type: "dry", quantity: 3.3, quantityType: "lbs"}
    ],
    hops: [
        {order: 1, name: "Galaxy", quantity: 1, size: "oz", type: "pellet", time: "0 min"},
        {order: 2, name: "Citra", quantity: 1, size: "oz", type: "pellet", time: "30 min"},
        {order: 3, name: "Cascade", quantity: 1, size: "oz", type: "pellet", time: "50 min"}
    ],
    irishMoss: true,
    boilLength: 70, boilLengthType: "min",
    gravity: [/* Needs a good validation that only one original and one final can be true and if original, can not be final, and visa-versa */
        {date: "2014-03-09", original: true, final: false, reading: 1.070, scale: ""},
        {date: "2014-03-30", original: false, final: true, reading: 1.009, scale: ""}
    ],
    yield:[
        {date: "2014-03-09", quantity: 42, type: "bottle", size: 12, sizeType: "oz", bottlingSugar: true,
            sugar: {type: "corn", quantity: 0.75, quantityType: "cups", waterQuantity: 2, waterQuantityType: "cups"}
        }
    ],
    abv: getABV(this.gravity)
},{
    batch: 3,
    name: "silver cap",
    boilDate: "2014-03-30",
    hops: [
        {order: 1, name: "Galaxy", quantity: 1, size: "oz", type: "pellet", time: "0 min"},
        {order: 2, name: "Warrior", quantity: 1, size: "oz", type: "pellet", time: "20 min"},
        {order: 3, name: "Centennial", quantity: 1, size: "oz", type: "pellet", time: "40 min"}
    ],
    irishMoss: true,
    boilLength: 70,
    boilLengthType: "min",
    originalGravity: "1.078",
    bottleDate: "2014-04-16",
    finalGravity: "1.009",
    yieldQuantity: 42,
    yieldType: "bottle",
    abv: getABV(this.gravity)
},{
    batch: 4,
    name: "green cap 2",
    boilDate: "2014-04-16",
    hops: [
        {order: 1, name: "Centennial", quantity: 1, size: "oz", type: "pellet", time: "20 min"},
        {order: 2, name: "Galaxy", quantity: 1, size: "oz", type: "pellet", time: "40 min"}
    ],
    irishMoss: true,
    boilLength: 70,
    boilLengthType: "min",
    originalGravity: "1.072",
    bottleDate: "2014-04-16",
    finalGravity: "1.009",
    yieldQuantity: 42,
    yieldType: "bottle",
    abv: getABV(this.gravity)
},{
    batch: 5,
    name: "red cap",
    boilDate: "2014-0-",
    hops: [
        {order: 1, name: "Centennial", quantity: 1, size: "oz", type: "whole", time: "40 min"}
    ],
    irishMoss: true,
    boilLength: 70,
    boilLengthType: "min",
    originalGravity: "1.072",
    bottleDate: "2014-04-16",
    finalGravity: "1.009",
    yieldQuantity: 42,
    yieldType: "bottle",
    abv: getABV(this.gravity)
},{
    batch: 6
}];
