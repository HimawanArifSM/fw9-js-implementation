function devideAndSort(num) {
  let strNum = num.toString()
  let spltNum = strNum.split('0').map(function(a){
    return a.split('').sort().join('')
  })
  console.log(spltNum)
}
devideAndSort(98123037221069457n)


//manual
 function devideAndSort(num){
  let strNum= ''+num
  let temp1=0
    for (i=0;i<=strNum.length-1;i++){
      for (j=i+1;j<=strNum.length-1;j++){
        if(strNum[i]<strNum[j]){
          temp1 = strNum[i]
          strNum[i]=strNum[j]
          strNum[j]=temp1
        }else{
          temp1 = strNum[j]
          strNum[j]=strNum[i]
          strNum[i]=temp1
        }
      }
    }
    console.log(strNum)
 }
 devideAndSort(98123037221069457n)