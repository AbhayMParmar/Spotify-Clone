console.log("Welcome to Spotify")

//initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs2/p1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Bhool Bhulaiyaa 3 - Title Track (feat.Pitbull) ",filePath:"songs2/p1/1.mp3",coverPath:"Covers2/P1/1.jpg"},
    {songName:"Raanjhan (From 'Do Patti')",filePath:"songs2/p1/2.mp3",coverPath:"Covers2/P1/2.jpg"},
    {songName:"Apna Bana Le (From 'Bhediya')",filePath:"songs2/p1/3.mp3",coverPath:"Covers2/P1/3.jpg"},
    {songName:"Ik Vaari Aa (From Raabta)",filePath:"songs2/p1/4.mp3",coverPath:"Covers2/P1/4.jpg"},
    {songName:"Humraah (From 'Malang-Unleash The Madness')",filePath:"songs2/p1/5.mp3",coverPath:"Covers2/P1/5.jpg"},
    {songName:"Tum Hi Ho (From 'Aashiqui 2')",filePath:"songs2/p1/6.mp3",coverPath:"Covers2/P1/6.jpg"},
    {songName:"Hua Main (From 'Animal')",filePath:"songs2/p1/7.mp3",coverPath:"Covers2/P1/7.jpg"},
    {songName:"Dheere Dheere",filePath:"songs2/p1/8.mp3",coverPath:"Covers2/P1/8.jpg"},
    {songName:"Kesariya (From 'Brahmastra')",filePath:"songs2/p1/9.mp3",coverPath:"Covers2/P1/9.jpg"},
    {songName:"Chaleya (From 'Jawan')",filePath:"songs2/p1/10.mp3",coverPath:"Covers2/P1/10.jpg"},
]

 songItems.forEach((element, i)=>{
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{   
         if(audioElement.paused || audioElement.currentTime<=0)
         {
              audioElement.play();
              masterPlay.classList.remove('fa-circle-play');
              masterPlay.classList.add('fa-circle-pause');
              gif.style.opacity = 1;
         }
         else
         {
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
         }
})
//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })    
}  
    

//Play Button

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `songs2/p1/${songIndex+0}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })
})
//Next Button
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs2/p1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
// Previous Button
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs2/p1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})