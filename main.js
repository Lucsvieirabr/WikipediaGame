let isAnimating = false;
let lastplayerNum = 0;
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
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function buttoncliked(){
    let divIsEmpety = checkPlayersDiv()
    if(isAnimating){return}
    if(divIsEmpety){
        changeState('nav')
        whiteBoxAnimationController('players')
    }
    addPlayer()
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

function addPlayer(){
    let divIsEmpety = checkPlayersDiv()
    let playerDiv = getPlayerDiv()
    if(divIsEmpety){
        setTimeout(()=>{
            animationplayerAndPutOnDiv(playerDiv)
        },2200)
        return
    }
    animationplayerAndPutOnDiv(playerDiv)
}
function checkPlayersDiv(){
    var element = document.getElementById("players");
    var numberOfChildren = element.childElementCount
    return numberOfChildren == 0
}
function getPlayerDiv(){
    let playerCard = createPlayer();
    let playerdiv = create_element_with_class('div', 'player', 'player' + getNumberOfPlayers())
    playerdiv.setAttribute('onclick', `playerClicked('player' + ${getNumberOfPlayers()})`)
    playerdiv.appendChild(playerCard);
    return playerdiv
}

function animationplayerAndPutOnDiv(playerDiv){
    document.getElementById('players').appendChild(playerDiv)

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


function createPlayer(){
    let div = document.createElement('div')
    let gradientBgPlayer = create_gradientBg_player()
    let footer = create_element_with_class('div', 'footer')
    let confettiDiv = create_element_with_class('div', 'svg', 'svg' + (getNumberOfPlayers()+ 1))
    div.appendChild(confettiDiv)
    div.appendChild(gradientBgPlayer)
    div.appendChild(footer)
    return div
}
function create_element_with_class(tagname, cssClass, id){
    let element = document.createElement(tagname)
    element.classList.add(cssClass)
    if(id) element.setAttribute('id', id)
    return element
}

function create_gradientBg_player(){
    let gradientBg = create_element_with_class('div', 'gradientBgPlayer')
    let profilepic = create_profile_pic()
    gradientBg.appendChild(profilepic)
    return gradientBg

}
function create_profile_pic(){
    let profilepic = create_element_with_class('div', 'profileGradient')
    let num = document.createElement('h1')
    num.innerHTML = `${lastplayerNum + 1}`
    lastplayerNum++
    let mygradient = get_random(gradients)
    profilepic.style.background =`linear-gradient(to right, ${mygradient[0]}, ${mygradient[1]})`
    profilepic.appendChild(num)
    return profilepic
}

function getNumberOfPlayers(){
    var element = document.getElementById("players");
    var numberOfChildren = element.childElementCount
    return numberOfChildren
}
function playerClicked(id){
    openWikiTab()
    document.getElementById(id).remove()
    if(getNumberOfPlayers() == 0){
        changeState('nav')
        whiteBoxAnimationController('players')
        lastplayerNum = 0
    }
}

function openWikiTab(){
    window.open('https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria')
}
