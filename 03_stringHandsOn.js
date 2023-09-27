

function stringHandsOn(){
    var str = `   Hey you are doing good, keep it up    `;
    console.log(`${str}`);
    var beforeTrim = str.length;
    console.log(`The string length is:${beforeTrim} `);
    var afterTrim= str.trim();
    var afterTrimLht=afterTrim.length;
    console.log(`The length of string after trim is:${afterTrimLht}`);
    var spaces= beforeTrim - afterTrimLht;
    console.log(`Extra removed spaces:${spaces}`);
    var fl=afterTrim.charAt(0);
    var ll=afterTrim.charAt(afterTrim.length-1);
    console.log(`First and Last later after trim is:${fl} & ${ll}`);

    var words=afterTrim.split(" ");
    console.log(`The total words after trim:${words.length}`);

    var index= str.indexOf(`good`);
    console.log(`Index of word "good" is:${index}`);

    var slic= str.slice(22);
    console.log(`Substring using slice(): ${slic}`);

    var substr= str.substring(22)
    console.log(`Substring using substring(): ${substr}`);

    var strEnd= str.includes("up");
    console.log(`String includes "up": ${strEnd}`);

    var strStart= str.includes("Hey");
    console.log(`String includes "Hey": ${strStart}`);
}
stringHandsOn();