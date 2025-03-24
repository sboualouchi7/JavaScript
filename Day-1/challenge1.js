const sentence = "The movie is not that bad, I like it";

const wordNot = sentence.indexOf("not");

const wordBad = sentence.indexOf("bad");

// 4. Check if bad comes after not and both exist
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {

    const before = sentence.substring(0, wordNot);
    const after = sentence.substring(wordBad + 3);
    
    const newSentence = before + "good" + after;
    console.log(newSentence);
} 
else {
    console.log(sentence);
}