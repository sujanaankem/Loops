function onClickPyramid() {
    debugger;
    let pyramid = parseInt(document.getElementById("txtRows").value);
    let i = pyramid;
    let result = "";
    let symbol = "$";
    while (i >= 1) {
        result = result + symbol.repeat(i) + "<br>";
        i--;
    }
    document.getElementById("divRows").innerHTML = result;
}