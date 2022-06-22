//konfensional
const word= "saya belajar javascript"
const lwCase=word.toLowerCase()
let result = ""
let temp=""
for (i=0;i<=lwCase.length-1;i++){
    if (lwCase[i]==" "){
        result=temp +" "+ result
        temp=""
    }else{temp+=lwCase[i]}
}
result=temp+" "+result
console.log(result)


//built-in method
function palindrome(str) {
    let lowRegStr = str.toLowerCase()
    let reverseStr = lowRegStr.split(' ').reverse().join(' '); 
    console.log(reverseStr)
  }
palindrome("saya belajar javascript")