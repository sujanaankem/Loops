let even = [];
let odd = [];
function onClickCheck() {
    debugger;
    let number = parseInt(document.getElementById("txtNumber").value);
    document.getElementById("txtNumber").value = "";
    if (number % 2 == 0) {
        even.push(number);
        let i = 0;
        evenContent = "";
        while(i < even.length){
         evenContent += `<p>${i+1}) ${even[i]}</p>`;  
        i++;  
        }
        document.getElementById("divEven").innerHTML = "Even numbers:" + evenContent;
    }else{
      odd.push(number);
      let j = 0;
      oddContent ="";
      while(j < odd.length){
      oddContent += `<p>${j+1}) ${odd[j]}</p>`;
      j++;
      }
      document.getElementById("divOdd").innerHTML ="Odd numbers:" + oddContent; 
    }
}
  

  