
document.addEventListener('DOMContentLoaded', () => {
    let inputAreaBox = document.querySelector('.inputArea');
    let inputContainer = document.querySelector('.searchItems');
    let alphanumericInput = /^([\w\s]+)$/;
    inputAreaBox.addEventListener('focus', () => {
        inputContainer.style.cssText = "outline:solid 3px #fff;";
        let keys = [];
        inputAreaBox.addEventListener('input', (e) => {
            keys.push(e.data);
            if(alphanumericInput.test(e.data)){
                inputContainer.style.cssText = "outline:solid 3px #0f0;";
            }else if(!alphanumericInput.test(e.data)){
                const explanation = document.querySelector('.input-area-explanation');
                inputContainer.style.cssText = "outline:solid 3px #f00;";
                let t = e.target;
                let badValues = /[^\w\s]/gi;
                t.value = t.value.replace(badValues, '');
                explanation.innerText = `${e.data} is not a valid input`;
                function display(){
                    explanation.style.display = 'block';
                    setTimeout(() => {
                        explanation.style.display = 'none'}, 1000);
                }
                display();
            }
            console.log(e.data);
        })
    })
    inputAreaBox.addEventListener('blur', () => {
        inputContainer.style.cssText = "outline: none;"
    })
})