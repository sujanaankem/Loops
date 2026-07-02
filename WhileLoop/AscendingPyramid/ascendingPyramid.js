function onClickPyramid() {
    debugger;
    let pyramid = parseInt(document.getElementById("txtRows").value);
    let i = 1;
    let constant = "";
    let symbol = "*";
    while (i <= pyramid) {
        constant = constant + symbol.repeat(i) + "<br>";
        i++;
    }
    document.getElementById("divRows").innerHTML = constant;
}