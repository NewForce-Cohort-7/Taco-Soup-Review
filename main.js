//Interrupting Cow
//Copy and paste the following array into your JavaScript file:
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
//Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
// Run your sentence to the terminal.

//1) write a loop
//2) build sententenceArray into an actual sentence
//3) make every fourth word moooooooo


let cowSentence = ""
for(let i=0; i < sentenceArray.length; i++){

    if((i + 1)  % 3 === 0 ){

        cowSentence = cowSentence +  ` ${sentenceArray[i]} MOOOOOOO`

    }
    else{

        cowSentence = cowSentence + ` ${sentenceArray[i]}`
    }

}

// console.log(cowSentence)



// Output:
// the cow danced MOOOOOOOO through the trees MOOOOOOOO in the light MOOOOOOOO of the moon



const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)

//Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 