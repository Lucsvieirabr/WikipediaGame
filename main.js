let isAnimating = false;
let gradients = [
    ["#ee9ca7", "#ffdde1"], 
    ["#FFE000", "#799F0C"], 
    ["#2193b0","#6dd5ed"],
    ["#b92b27","#1565C0"],
    ["#ffe259","#ffa751"],
    ["#acb6e5","#86fde8"],
    ["#9796f0", "#fbc7d4"],
    ["#ec008c","#fc6767"],
    ["#cc2b5e","#753a88"],
    ["#e65c00", "#e65c00"],
    ["#ff6e7f", "#bfe9ff"]
]
function buttoncliked(){
    let divIsEmpety = checkPlayersDiv()
    if(isAnimating){return}
    if(divIsEmpety){
        changeState('nav')
        whiteBoxAnimationController('players')
    }
    addPlayer()
}
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}
function createPlayer(){
    let div = document.createElement('div')
    let gradientBgPlayer = document.createElement('div')
    let profilePic = document.createElement('div')
    let footer = document.createElement('div')
    gradientBgPlayer.classList.add('gradientBgPlayer')
    profilePic.classList.add('profileGradient')
    let mygradient = get_random(gradients)
    profilePic.style.background =`linear-gradient(to right, ${mygradient[0]}, ${mygradient[1]})`
    gradientBgPlayer.appendChild(profilePic)
    footer.classList.add('footer')
    let confettiDiv = document.createElement('div')
    confettiDiv.classList.add('svg')
    confettiDiv.setAttribute('id', 'svg' + (getNumberOfPlayers()+ 1))
    div.appendChild(confettiDiv)
    div.appendChild(gradientBgPlayer)
    div.appendChild(footer)
    return div
}
function addPlayer(){
    let divIsEmpety = checkPlayersDiv()
    let playerCard = createPlayer();
    let playerDiv = document.createElement('div')
    playerDiv.classList.add('player')
    playerDiv.appendChild(playerCard);
    if(divIsEmpety){
        setTimeout(()=>{
            animationplayerAndPutOnDiv(playerDiv)
        },2200)
        return
    }
    animationplayerAndPutOnDiv(playerDiv)
}

function getNumberOfPlayers(){
    var element = document.getElementById("players");
    var numberOfChildren = element.childElementCount
    return numberOfChildren
}
function animationplayerAndPutOnDiv(playerDiv){
    document.getElementById('players').appendChild(playerDiv)
    console.log(getNumberOfPlayers())

    let svgContainer = document.getElementById('svg' + getNumberOfPlayers());
    const animItem = bodymovin.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
        });
    animItem.goToAndPlay(0,true);
    
    animItem.addEventListener('complete', () => {
        svgContainer.remove();
        
    })
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
