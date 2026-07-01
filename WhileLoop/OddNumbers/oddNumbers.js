function onClickCheck(){
    debugger;
   let startNumber = parseInt(document.getElementById("txtStart").value);
   let endNumber = parseInt(document.getElementById("txtEnd").value);
   let i = startNumber;
   if (startNumber  % 2 == 0){
    i += 1;
   }
    while( i <= endNumber ){
        console.log(i);
        i += 2;
    }
}