function onClickCheck(){
    debugger;
    let startNumber = parseInt(document.getElementById("txtStart").value);
    let endNumber = parseInt(document.getElementById("txtEnd").value);
    let i = startNumber
    while(i <= endNumber){
        console.log(i);
        i++;
    }
}