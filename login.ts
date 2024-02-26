let userName:String[]=['syed','aleez','hassan','umer']
console.log("syed is admin if this website");
for (const i in userName) {
if (userName[i]==='syed') {
    console.log("hi syed do you want to see the status report")
    
}
else{
    console.log(`hi ${userName[i]} thank you for logging in`)
}
}
console.log("==================================")
let currentUser:String[]=['wahaj','ebad','aman','salman','shakoor']
let newUser:String[]=['Ebad','aman','kapil','farman','nawaz']
for (const i in currentUser) {
    let isAvailable:boolean=true;

    for (const j in newUser) {
       if (currentUser[i].toLocaleLowerCase()===newUser[j].toLocaleLowerCase()) {
        console.log(`${newUser[j]} usernae not available`)
        isAvailable=false;
        break;

       }
       
      
       }
       if(isAvailable){
        console.log(`${currentUser[i]} available`)
       }
      
        
}

