function buttoncliked(){
    changeState('nav')
    let playersBox = document.getElementById('players');
    let pdisplay = window.getComputedStyle(playersBox).display;
<<<<<<< HEAD
    if(pdisplay == 'none'){
        playersBox.classList.add('players' + '--open')
    }else{
        playersBox.classList.remove('players')
        playersBox.classList.add('players' + '--closed')
        setTimeout(()=>{
            playersBox.classList.remove('players' + '--closed')
            playersBox.classList.remove('players' + '--open')
            playersBox.classList.add('players')

        }, 4000)
    }


=======
    playersBox.style.display = pdisplay == 'none' ? 'grid' : 'none'
>>>>>>> 8a40a9f80f20d58bdc4d77c89493e33411dd7086
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