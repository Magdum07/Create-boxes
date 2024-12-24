function addColor() {

    
    var mainElement = document.getElementById("main");
    var newBox = document.createElement("div");
    
    var colorPicker = document.getElementById("color-picker").value;
    // console.log(colorPicker);
    
    var manualColor = document.getElementById("input-picker").value;
    
    newBox.style.backgroundColor = manualColor || colorPicker;
    newBox.classList.add("color-box");
    
    mainElement.appendChild(newBox);
    var inputColorBox = document.querySelector(".color-box");

    var newPara = document.createElement("p");
    newBox.appendChild(newPara);
    newPara.innerHTML = manualColor || colorPicker;
    // newPara.innerHTML = manualColor;
    newPara.style.fontSize = "25px";
    newPara.style.color = "white";

    manualColor.innerHTML = "";

} 