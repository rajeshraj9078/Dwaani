console.log("Welcome to Dwaani");
//Initilization the variables
let songIndex=0;
let audioElement=new Audio('song/Lost Control.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Lost Control",filePath:"song/Lost Control.mp3",coverPath:"cover/1.jfif"},
    {songName:"Dheera dheera slowed version",filePath:"song/Dheera dheera slowed version.mp3",coverPath:"cover/2.jpeg"},
    {songName:"Aadatein",filePath:"song/Aadatein.mp3",coverPath:"cover/3.jpeg"},
    {songName:"Alag asman",filePath:"son/Alag asman.mp3",coverPath:"cover/s4.jpeg"},
    {songName:"Rebirth",filePath:"song/Rebirth.mp3",coverPath:"cover/5.jpeg"},
    {songName:"Main Agar",filePath:"song/Main Agar.mp3",coverPath:"covers6.jpeg"},
    {songName:"Su Kare Che",filePath:"song/Su Kare Che.mp3",coverPath:"cover/7.jpeg"},
    
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src[i]=song[i].coverPath;
    
})
// audioElement.play();
//play and pause----------------------------
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity=0; 
    }
})
//Listen to Events----------------
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value = progress; 
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songName')).forEach((element)=>{

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='song/Dheera dheera slowed version';
        audioElement.currentTime=0;
        audioElement.play;
            

    })
})




