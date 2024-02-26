// Function to store information about a car
function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };

    for (const option of options) {
        for (const key in option) {
            car[key] = option[key];
        }
    }

    return car;
}

// Example call
let myCar = car_info('Toyota', 'Camry', { color: 'Blue' }, { features: ['Navigation', 'Sunroof'] });
console.log(myCar);
