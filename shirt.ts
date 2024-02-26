

function tShirt(size,messg) :void{
    console.log(`${size}`)
    console.log(`${messg}`)
}
tShirt('large','hello world')
tShirt('medium','i love ts')
tShirt('small','i love myself')

console.log("=================================")
function cities(name:String='karachi',country:String='Pakistan') {
  //console.log(`${name} is the city of ${country}`)
  return `${name},${country}`
}
// cities('washintgon','America')
// cities();
let res:String=cities('Lahore','Pakistan')
console.log(res)
