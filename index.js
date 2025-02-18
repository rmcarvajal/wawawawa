const miObjeto ={
    "pincho" : 777,
    "pancho": "gambling"
}

const obj2 = miObjeto
miObjeto.pancho = "slots"
console.log(miObjeto)
console.log(obj2)

console.log("shallow")

const obj3 = {...miObjeto} //shallow copy, inner objects remain the same and can affect changing conditions

obj3.poncho = "brothers"
console.log(obj3)
console.log(miObjeto)

console.log("deep")

const objDeep = JSON.parse(JSON.stringify(miObjeto))

const squared = [1,2,3].forEach(e => e*e)
const squored = [4,5,6].map (w => w*w)

//forEach doesn't return values, map does

console.log(squared)
console.log(squored)