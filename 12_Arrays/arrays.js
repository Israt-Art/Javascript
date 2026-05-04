let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let heroes=["ironmman","thor","hulk","shaktiman","spiderman"];
console.log(heroes[3]);

//for
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);
}

//for of
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

