let isAnimating = false;
function buttoncliked(){
    let divIsEmpety = checkPlayersDiv()
    if(isAnimating){return}
    //if(divIsEmpety){
      //  changeState('nav')
        //whiteBoxAnimationController('players')
   // }
   changeState('nav')
   whiteBoxAnimationController('players')
}

function checkPlayersDiv(){
    var element = document.getElementById("players");
    var numberOfChildren = element.childElementCount
    return numberOfChildren == 0
}

function whiteBoxAnimationController(docId){
    let playersBox = document.getElementById(docId);
    if(playersBox.classList.contains(docId + '--open') && !isAnimating){
        isAnimating = true
        playersBox.classList.remove(docId)
        playersBox.classList.add(docId + '--closed')
        setTimeout(()=>{
            playersBox.classList.remove(docId + '--open')
            playersBox.classList.remove(docId + '--closed')
            playersBox.classList.add(docId)
            isAnimating = false;
        },2600)
        
    }else{
            playersBox.classList.add(docId + '--open')
        }
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
