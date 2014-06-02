/**
 * Created by MHEIMBECK on 5/31/14.
 */
//What am I trying to do?
function ABVCalc (og, fg) {
    return ((og - fg) * 131) + "%";
}
var empty = {
        batch: 0, name: "", boilDate: "", hops: [
            {order: 0, name: "", quantity: 1, size: "oz", type: "pellet", time: "0 min"}
        ], irishMoss: true, boilLength: 60, boilLengthType: "min", originalGravity: "1.000",
        bottleDate: "", finalGravity: "1.000", yieldQuantity: 0, yieldType: "bottle",
        aBV: ABVCalc(origanalGravity, finalGravity)
    },
beers = [{
    batch: 2,
    name: "blue cap",
    boilDate: "2014-03-09",
    hops: [
        {order: 1, name: "Galaxy", quantity: 1, size: "oz", type: "pellet", time: "0 min"},
        {order: 2, name: "Citra", quantity: 1, size: "oz", type: "pellet", time: "30 min"},
        {order: 3, name: "Cascade", quantity: 1, size: "oz", type: "pellet", time: "50 min"}
    ],
    irishMoss: true,
    boilLength: 70,
    boilLengthType: "min",
    originalGravity: "1.07",
    bottleDate: "2014-03-09",
    finalGravity: "1.009",
    yieldQuantity: 42,
    yieldType: "bottle",
    aBV: ABVCalc(originalGravity,finalGravity)
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
    aBV: ABVCalc(originalGravity,finalGravity)
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
    aBV: ABVCalc(originalGravity,finalGravity)
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
    aBV: ABVCalc(originalGravity,finalGravity)
},{
    batch: 6,
    name: " cap", boilDate: "", hops:[
        {order: 0, name: "", quantity: 1, size: "oz", type: "pellet", time: "0 min"}
    ], irishMoss: true, boilLength: 60, boilLengthType: "min", originalGravity: "1.000",
    bottleDate: "", finalGravity: "1.000", yieldQuantity: 0, yieldType: "bottle",
    aBV: ABVCalc(origanalGravity,finalGravity)
}];
