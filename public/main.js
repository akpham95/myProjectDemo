let contactButton = document.querySelector(".button-10")
const container = document.querySelector('section');

const helloAlert = evt => {
    axios.get('/rollbar')
        .then(res => {
            alert(res.data)
        })
}

function contactHandler(evt) {
    evt.preventDefault();

    axios
    .post('/api/myEmail', )
}

function putThingInView(res) {
    container.innerHTML = `<p>${res}</p>`
}

contactButton.addEventListener("click", helloAlert)