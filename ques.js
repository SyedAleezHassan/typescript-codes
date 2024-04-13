function calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Check if the birthday hasn't occurred yet this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Example usage
const birthDate = new Date('1990-05-15'); // Replace with the birthdate you want to calculate the age for
const age = calculateAge(birthDate);
console.log('Age:', age); // Output: Age: 31 (assuming current date is 2021-05-14)
