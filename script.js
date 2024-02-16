let plusIcon = document.querySelectorAll('.plus-icon')
let formQuestion = document.querySelectorAll('.form-qa-container')

formQuestion.forEach( (item,index) =>{

    let currentIcon = plusIcon[index];
    // console.log(currentIcon)

    item.addEventListener('click', (event)=>{
    
        let formAns = document.querySelectorAll('.form-answer')
        formAns[index].classList.toggle('form-answer-switch')
        if(formAns[index].classList.contains('form-answer-switch')){
            currentIcon.src = `./assets/images/icon-minus.svg` 
        }
        else{
            currentIcon.src = `./assets/images/icon-plus.svg` 
        }     
    })
    
})

