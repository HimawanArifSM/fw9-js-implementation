//konfensional
const word= "Malam"
const lwCase=word.toLowerCase()
let temp=""
for (i=lwCase.length-1;i>=0;i--){
    temp= lwCase[i]+temp
}
if (temp==lwCase){
    console.log("Kalimat Palindrome")
}else{console.log("Bukan Palindrome")}


//builtin method
function palindrome(str) {
    let lowRegStr = str.toLowerCase()
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    if(reverseStr === lowRegStr){console.log("Palindrome word")}
  else{console.log("Not a palindrome")}
  }
palindrome("Malam")