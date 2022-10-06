let isAnimating = false;
function buttoncliked(){
    let divIsEmpety = checkPlayersDiv()
    if(isAnimating){return}
    if(divIsEmpety){
        changeState('nav')
        whiteBoxAnimationController('players')
    }
    addPlayer()
}

function createPlayer(){
    let div = document.createElement('div')
    let gradientBgPlayer = document.createElement('div')
    let profilePic = document.createElement('div')
    let footer = document.createElement('div')
    gradientBgPlayer.classList.add('gradientBgPlayer')
    profilePic.classList.add('profileGradient')
    gradientBgPlayer.appendChild(profilePic)
    footer.classList.add('footer')
    div.appendChild(gradientBgPlayer)
    div.appendChild(footer)
    return div
}
function addPlayer(){
    let playerCard = createPlayer();
    let playerDiv = document.createElement('div')
    playerDiv.classList.add('player')
    playerDiv.appendChild(playerCard);
    document.getElementById('players').appendChild(playerDiv)
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
