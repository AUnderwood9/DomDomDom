let randomColorArray = ["#2C14CC", "#767199", "#767199", "#FFAA40", "#CC6014", "#9ECC9C", "#BFFF00", "#CCC89C", "14A1CC"];

let createElement = function(elementType, contentToAppend = "", nodeToAppendTo = document.body) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    
    nodeToAdd.appendChild(nodeText);
    nodeToAppendTo.appendChild(nodeToAdd);
};

let createElementAndClass = function(elementType, elementClass, contentToAppend = "", nodeToAppendTo = document.body) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    elementClass.forEach((item)=> {
        nodeToAdd.className += `${item} `;
    });

    
    nodeToAdd.appendChild(nodeText);
    nodeToAppendTo.appendChild(nodeToAdd);
};

let createElementAndId = function(elementType, elementId, contentToAppend = "", nodeToAppendTo = document.body) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.id = elementId;
    
    nodeToAdd.appendChild(nodeText);
    nodeToAppendTo.appendChild(nodeToAdd);
};

let createElementIdAndClass = function(elementType, elementId, elementClass, contentToAppend = "", nodeToAppendTo = document.body) {
    let nodeToAdd = document.createElement(elementType);
    let nodeText = document.createTextNode(contentToAppend);
    nodeToAdd.id = elementId;
    elementClass.forEach((item)=> {
        nodeToAdd.className += `${item} `;
    });
    
    nodeToAdd.appendChild(nodeText);
    nodeToAppendTo.appendChild(nodeToAdd);
};

createElementAndId("button", "domButton", "Add Square!");
let domButton = document.getElementById("domButton");
let squareId = 1;
let squareArray = document.getElementsByClassName("squares");
domButton.className += "waves-effect waves-light btn-large blue-grey lighten-1";

domButton.addEventListener("click",() => {

    createElementIdAndClass("div", squareId, ["squares", " z-depth-3", "waves-effect", "waves-light"]);
    squareId++;
    let currentIndex = squareId-2;
    let currentNode = Array.from(squareArray)[squareId-2];

    currentNode.addEventListener("mouseover", (stuff) => {
        createElement("p", stuff.target.id, stuff.target);
    });

    currentNode.addEventListener("mouseout", (stuff) => {
        try{
            stuff.target.removeChild(stuff.target.lastChild);
        }catch(err){
            
        }
    });

    currentNode.addEventListener("click", (stuff) => {
        let currentElement = document.getElementById(stuff.target.id);
        stuff.target.style.backgroundColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
    });

    currentNode.addEventListener("mousedown", (stuff) => {
        try{
            stuff.target.removeChild(stuff.target.lastChild);
        }catch (err){

        }
    });

    currentNode.addEventListener("dblclick", (stuff) => {
            let previousNode = stuff.target.previousSibling;
            let nextNode = stuff.target.nextSibling;
            try{
                if(Number(stuff.target.id) % 2 === 0 && nextNode.classList.contains("squares")){
                    nextNode.parentNode.removeChild(nextNode);
                }else if(Number(stuff.target.id) % 2 !== 0 && previousNode.classList.contains("squares")){
                    previousNode.parentNode.removeChild(previousNode);
                }else {
                    alert("STOP DELETING MY BROTHERS AND SISTERS YOU PSYCHO!!!");
                }
            }catch(err){
                alert("STOP DELETING MY BROTHERS AND SISTERS YOU PSYCHO!!!");
            }
        
    });
});