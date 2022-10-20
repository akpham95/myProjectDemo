const path = require('path')

module.exports = {
    getHTML: (req,res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    },
    getRollbar: (req, res) => {
        try {
            nonExistentFunction()
        }
        catch{
            rollbar.error('this didnt work')
        }
        res.status(200).send("welcome to my project")
    }
}