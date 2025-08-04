const allStrongWords = document.querySelectorAll("p strong")
   console.log(allStrongWords)
    function highlight(){
    allStrongWords.forEach((element)=>{
     element.style.color = "rgb(0, 128, 0)"
    })
}

function return_normal(){
    allStrongWords.forEach((element)=>{
     element.style.color = "rgb(0, 0, 0)"
    })
}
