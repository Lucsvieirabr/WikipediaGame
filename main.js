function buttoncliked(){
    changeState('mainctx')
}

function changeState(documentID){
    let element = document.getElementById(documentID);
    if(element.classList.contains(documentID + '--open')){
        element.classList.remove(documentID + '--open')
        element.classList.add(documentID + '--closed')
    }else{
        element.classList.add(documentID + '--open')
        element.classList.remove(documentID + '--closed')
    }
}