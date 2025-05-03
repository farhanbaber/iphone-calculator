
let output = document.getElementById("para-inner")
function display(num) {
    output.value = output.value + num
};
function calculate() {
    try {
        output.value = eval(output.value)
    } catch (error) {
        alert("soory invalid question")
        console.log("invalid");
        
    }
}
function clearDisplay() {
    output.value = ""
}
function del() {
    output.value = output.value.slice(0,-1)
}

