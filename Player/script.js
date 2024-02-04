const musicList=[
    {
        id:0,
        title:"Love Story",
        path:"./mp3/Love Story.mp3",
        vocalist:"Taylor Swift",
    },
    {
        id:1,
        title:"Mae_Mar_Par",
        path:"./mp3/Mae_Mar_Par_-_Y_Wine(256k).mp3",
        vocalist:"Y Wine",
    },
    {
        id:2,
        title:"Chan Khae",
        path:"./mp3/Chan khae.mp3",
        vocalist:"Raymond",
    },
    {
        id:3,
        title:"Thar_Dee_Lu",
        path:"./mp3/Thar_Dee_Lu.mp3",
        vocalist:"Thar Dee Lu",
    },
    {
        id:4,
        title:"တစ်နေ့နေ့တော့ချစ်၍လာလိမ့်မည်",
        path:"./mp3/တစ်နေ့နေ့တော့ချစ်၍လာလိမ့်မည်.mp3",
        vocalist:"Unknown",
    },
    {
        id:5,
        title:"လမင်းနဲ့ပင်လယ်",
        path:"./mp3/လမင်းနဲ့ပင်လယ်.mp3",
        vocalist:"Unknown",
    },
    {
        id:6,
        title:"လေးဖြူ_-_အသုံးမကျတဲ့နှင်းဆီ",
        path:"./mp3/လေးဖြူ_-_အသုံးမကျတဲ့နှင်းဆီ.mp3",
        vocalist:"လေးဖြူ"
    },
    {
        id:7,
        title:"အကြည့်",
        path:"./mp3/အငဲ_-_အကြည့်.mp3",
        vocalist:"အငဲ",
    },
]

const musicTag=
document.getElementById("music")

const mp3Title=
document.getElementById("title")

for (let i = 0; i < musicList.length; i++) {

    const musicdata=
    document.createElement("div")
    musicdata.classList.add("ediHv","ediCur")
    
    musicdata.style.color="#fff"
    musicdata.style.cursor="pointer"
    musicdata.style.marginTop="5px"

    const musicTitle=
    document.createElement("div")

    musicTitle.textContent=musicList[i].title

    const songVocalist=
    document.createElement("div")
    songVocalist.classList.add("text-muted","ps-1")

    songVocalist.textContent=musicList[i].vocalist

    musicTag.append(musicdata)
    musicdata.append(musicTitle,songVocalist)

    musicdata.addEventListener("click" ,()=>{
        pausebtn.classList.remove("d-none")
        playbtn.classList.add("d-none")
        mp3Title.textContent = musicList[i].title
        audioTag.src = musicList[i].path
        audioTag.play()
        rater = i
    })
}



const playbtn=
document.getElementById("play")

const previousbtn=
document.getElementById("previous")

const pausebtn=
document.getElementById("pause")

const nextbtn=
document.getElementById("next")

const audioTag =
document.getElementById("audio")

const totalTimer = 
document.getElementById("total-timer")

const currentTimer = 
document.getElementById("current-timer")

const bar = 
document.getElementById("bar")

let rater = 0;
mp3Title.textContent = musicList[rater].title
playbtn.addEventListener("click",()=>{
    pausebtn.classList.remove("d-none")
    playbtn.classList.add("d-none")
    mp3Title.textContent = musicList[rater].title
    audioTag.src = musicList[rater].path
    audioTag.play()

})

pausebtn.addEventListener("click",()=>{
    pausebtn.classList.add("d-none")
    playbtn.classList.remove("d-none")
    audioTag.pause()
})

nextbtn.addEventListener("click", ()=>{
    rater += 1
    if (rater === musicList.length) {
        rater = 0;
        pausebtn.classList.remove("d-none")
        playbtn.classList.add("d-none")
        mp3Title.textContent = musicList[rater].title
        audioTag.src = musicList[rater].path
        audioTag.play()
    }else if( rater < musicList.length) {
        pausebtn.classList.remove("d-none")
        playbtn.classList.add("d-none")
        mp3Title.textContent = musicList[rater].title
        audioTag.src = musicList[rater].path
        audioTag.play()
    }
    
})

previousbtn.addEventListener("click",()=>{
    rater -=1
    if (rater === musicList.length || rater < 0) {
        rater = 0;
        pausebtn.classList.remove("d-none")
        playbtn.classList.add("d-none")
        mp3Title.textContent = musicList[rater].title
        audioTag.src = musicList[rater].path
        audioTag.play()
    }else if( rater < musicList.length) {
        pausebtn.classList.remove("d-none")
        playbtn.classList.add("d-none")
        mp3Title.textContent = musicList[rater].title
        audioTag.src = musicList[rater].path
        audioTag.play()
    }
})
let totalTime;
audioTag.addEventListener("loadeddata",()=>{
    totalTime=Math.floor(audioTag.duration); //344.344 = 344
    const minute=Math.floor(totalTime/60);
    const second=totalTime%60;
    const secondText=second<10 ? "0"+second :second
    const minuteText=minute<10 ? "0"+minute :minute
    totalTimer.textContent=minuteText+":"+secondText
})

audioTag.addEventListener("timeupdate",()=>{
    const currentTime= Math.floor(audioTag.currentTime); 0.38 
    const minute =Math.floor(currentTime/60)
    const second =currentTime%60;
    const secondText=second<10 ? "0"+second :second
    const minuteText=minute<10 ? "0"+minute :minute
    currentTimer.textContent=minuteText+":"+secondText

    const currentProgressWidth = (450 / totalTime) * currentTime // 4,2,0
    bar.style.width = currentProgressWidth.toString() + "px"

})

/**
 * 
    100s  = 500px 
    1s = 1/ 100 * 5000
 * 
 */