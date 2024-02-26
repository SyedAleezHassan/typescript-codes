type country={
    name:String;
    lang:String;
    capital:String;
}
var countries:country[]=[
    {name:"Pakistan",lang:"Urdu",capital:"Islamabad"},
    {name:"India",lang:"Hindi",capital:"Dehli"}
]
for (const country of countries) {
    console.log(country.name);
    console.log(country.lang)
    console.log(country.capital)
    console.log("======================================")
}