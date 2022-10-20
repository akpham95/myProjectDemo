let contactButton = document.querySelector(".button-10")
const container = document.querySelector('section');

const helloAlert = evt => {

    alert("Alert on click")
}

function contactHandler(evt) {
    evt.preventDefault();

    axios
    .post('/api/myEmail', )
}

function putThingInView(res) {
    container.innerHTML = `<p>${res}</p>`
}

contactButton.addEventListener("click", putEmailInView)

axios
    .get('/api/myEmail')
    .then(res => {

    })