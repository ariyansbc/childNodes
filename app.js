const bodyAllChildsNode = document.getElementById('bodyAllChildsNode');

let text = " ";
let i = 0;
let x = document.body.childNodes;
for(i = 0 ; i< x.length ; i++) {
    text = text + x[i].nodeName + "<br>";
}
bodyAllChildsNode.innerHTML = text