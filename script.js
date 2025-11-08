const answers = document.querySelectorAll(".answer");
function openans(index){
    answers.forEach(ans => {
        ans.classList.remove("open");
    })
    document.getElementById(`a${index}`).classList.add("open");
}