let str = "Hi";

function countVowels(str) {
    let c = 0;

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            c++;
        }
    }

    alert("Total vowels = " + c);
}

countVowels(str);
