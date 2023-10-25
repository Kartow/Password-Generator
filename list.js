function addtoList(){
    let node = document.createElement("li");
    let textnode = document.createTextNode(password);
    node.appendChild(textnode);
    document.getElementById("passList").prepend(node);
}

function cleanList(){
    let parent = document.getElementById("passList");
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
