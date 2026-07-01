function onClickCheck(){
    debugger;
    let startNumber = parseInt(document.getElementById("txtStart").value);
    let endNumber = parseInt(document.getElementById("txtEnd").value);
    if (startNumber % 2 == 1){
        startNumber += 1;
    }
    if (endNumber % 2 == 1){
        endNumber -= 1;
    }
    let i = startNumber;
    while(i <= endNumber){
        alert(i);
        i += 2;
    }
}