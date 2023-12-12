
const file = require('fs');

file.writeFile('files/text.txt','A b C D e f .....',(err)=>{
    if (err) {
        console.log("An error occur");
    }
    console.log("File created succesfully");
});


console.log();