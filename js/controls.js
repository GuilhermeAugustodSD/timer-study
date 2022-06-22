export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
}){

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide') 
    }

    function soundOff(){
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
    }

    function soundOn(){
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    }


    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    return {
        reset,
        play,
        pause,
    }
}