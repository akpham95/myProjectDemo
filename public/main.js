let contactButton = document.querySelectorAll('button.button-10')

const helloAlert = evt => {

    alert("Alert on click")
}

contactButton.addEventListener('click', helloAlert)