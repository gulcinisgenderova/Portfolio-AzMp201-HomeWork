import express from 'express'
import mongoose, { Schema } from 'mongoose';
const port = 5000
const app = express()
app.use(express.json());

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     surname: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     age: {
//         type: Number,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     gender: {
//         type: String,
//         required: true,
//     },
//     bio: {
//         type: String,
//         required: true,
//     },
//     profilePhoto: {
//         type: String,
//         required: true,
//     }

// });
// const UserModel = mongoose.model('UserModel', userSchema);

// app.get('/', async (req, res) => {
//     try {
//         const users = await UserModel.find({})
//         res.send(users)

//     } catch (error) {
//         res.send(error.message);
//     }
// })
// app.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const user = await UserModel.findById(id)
//         res.send(user)

//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.post('/', async (req, res) => {
//     try {
//         const { name, surname, username, bio, email, age, password, gender, profilePhoto } = req.body
//         const newUser = new UserModel({ name, surname, username, bio, email, age, password, gender, profilePhoto })
//         await newUser.save()
//         res.send(newUser)

//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { name, surname, username, bio, email, age, password, gender, profilePhoto } = req.body
//         const user = await UserModel.findByIdAndUpdate(id, { name, surname, username, bio, email, age, password, gender, profilePhoto })
//         res.send(user)

//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const user = await UserModel.findByIdAndDelete(id)
//         res.send(user)

//     } catch (error) {
//         res.send(error.message);
//     }
// })

mongoose.connect("mongodb+srv://mi7rtfggj:1243@cluster1.ix2zkkn.mongodb.net/")
    .then(() => console.log('Connected!'))
    .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
