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

let removeChildElement = (childToRemove) => {
    try{
        childToRemove.target.removeChild(childToRemove.target.lastChild);
    }catch(err){
        
    }
};

createElementAndId("button", "domButton", "Add Square!");
let domButton = document.getElementById("domButton");
let squareId = 1;
let deletedElement = false;

domButton.className += "waves-effect waves-light btn-large blue-grey lighten-1";

domButton.addEventListener("click",() => {
    
    createElementIdAndClass("div", squareId, ["squares", " z-depth-3", "waves-effect", "waves-light"]);

    let squareArray = document.querySelectorAll(".squares");
    let currentNode = squareArray.item(squareArray.length-1);

    currentNode.addEventListener("mouseover", (stuff) => {
        createElement("p", stuff.target.id, stuff.target);
    });

    currentNode.addEventListener("mouseout", (stuff) => {
        removeChildElement(stuff);
    });

    currentNode.addEventListener("click", (stuff) => {
        let currentElement = document.getElementById(stuff.target.id);
        stuff.target.style.backgroundColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
    });

    currentNode.addEventListener("mousedown", (stuff) => {
        removeChildElement(stuff);
    });

    currentNode.addEventListener("dblclick", (stuff) => {
            let previousNode = stuff.target.previousSibling;
            let nextNode = stuff.target.nextSibling;

            if(Number(stuff.target.id) % 2 === 0 && nextNode !== null){
                stuff.target.nextElementSibling.remove();
                squareArray = document.querySelectorAll(".squares");
                squareId = Number(squareArray.item(squareArray.length-1).id)+1;
            }else if(Number(stuff.target.id) % 2 !== 0 && previousNode !== null && previousNode.classList.contains("squares")){
                stuff.target.previousElementSibling.remove();
                squareArray = document.querySelectorAll(".squares");
                squareId = Number(squareArray.item(squareArray.length-1).id)+1;
            }else {
                alert("STOP DELETING MY BROTHERS AND SISTERS YOU PSYCHO!!!");
            }
    });

    squareId++;
});