// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield'];
show_magicians(magicianNames);
