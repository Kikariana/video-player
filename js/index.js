const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)
$backward.addEventListener('click', handlebackward)
$forward.addEventListener('click', handleforward)


function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al botón play')
}

function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón pause')
}

function handlebackward() {
    $video.currentTime -= 10
    console.log('le diste click al botón retroceder 10 segundos', $video.currentTime)
}

function handleforward() {
    $video.currentTime += 10
    console.log('le diste click al botón adelantar 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handletimeupdate)

function handleloaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handletimeupdate() {
    $progress.value = $video.currentTime
    //console.log('tiempo actual', $video.currentTime);
}

$progress.addEventListener('input',handleinput)

function handleinput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}