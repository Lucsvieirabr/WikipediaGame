function buttoncliked(){
    changeState('nav')
    let playersBox = document.getElementById('players');
    let pdisplay = window.getComputedStyle(playersBox).display;
    playersBox.style.display = pdisplay == 'none' ? 'grid' : 'none'

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