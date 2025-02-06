const express = require('express');
const bcrypt = require('bcrypt');
const DBConnecion = require('./config/db.js')
const userModel = require('./models/user.model.js')
const path = require('path');
const { url } = require('inspector');

const app = express();
DBConnecion()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    let { name, email, password, confirmPassword, role } = req.body
    let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!name || !email || !password || !confirmPassword) return res.json({ message: 'All fields are required' })
    if (!email.match(emailFormat)) return res.json({ message: "Invalid email format" })
    if (password !== confirmPassword) return res.status(400).json({ message: 'password did', status: 400 });


    let hashPassword = await bcrypt.hash(password, 10)
    let user = await userModel.create({
        name,
        email,
        password: hashPassword,
        role
    })
    res.redirect(`registersuccess?name=${encodeURIComponent(name)}`)
})


app.get('/registersuccess', (req, res) => {
    const name = req.query.name
    res.render('registersuccess', { name })
})

app.post('/login', async (req, res) => {
    let { email, password } = req.body

    if (!email || !password) return res.status(400).json({ message: "All fields are required" })

    let user = await userModel.findOne({ email: email })

    if (!user) return res.status(404).json({ message: "User not found" })

    let isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) return res.status(404).json({ message: "Invalid email or password" })

    res.redirect('/profile')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


