import { UserModel } from "../Model/userModel.js";

export const getUsers =  async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)

    } catch (error) {
        res.send(error.message);
    }
}

export const getUser =  async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id)
        res.send(user)

    } catch (error) {
        res.send(error.message);
    }
}

export const createUsers = async (req, res) => {
    try {
        const { name, surname, username, bio, email, age, password, gender, profilePhoto } = req.body
        const newUser = new UserModel({ name, surname, username, bio, email, age, password, gender, profilePhoto })
        await newUser.save()
        res.send(newUser)

    } catch (error) {
        res.send(error.message);
    }
}


export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, username, bio, email, age, password, gender, profilePhoto } = req.body
        const user = await UserModel.findByIdAndUpdate(id, { name, surname, username, bio, email, age, password, gender, profilePhoto })
        res.send(user)

    } catch (error) {
        res.send(error.message);
    }
}

export const deleteUser =  async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findByIdAndDelete(id)
        res.send(user)

    } catch (error) {
        res.send(error.message);
    }
}