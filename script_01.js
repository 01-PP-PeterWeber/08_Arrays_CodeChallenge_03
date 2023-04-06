
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence1(["Ich","bin","Max"],"S"));
// output(getSentence2(["Bist","du","Max"],"Q"));
// output(getSentence3(["Ich","bin"],"E"));
// output(getSentence4(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence1(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            str += arr[i] + PUNCT;
        } else {
            str += arr[i] + GAP;  
        }           
    }
     return str;
}


function getSentence2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            str += arr[i] + PUNCT;
        } else {
            str += arr[i] + GAP;  
        }           
    }
     return str;
}


function getSentence3(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            str += arr[i] + PUNCT;
        } else {
            str += arr[i] + GAP;  
        }           
    }
     return str;
}


function getSentence4(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            str += arr[i] + PUNCT;
        } else {
            str += arr[i] + GAP;  
        }           
    }
     return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}