import {
    findUserByCredentials,
    findUserByUsername,
    findAllUsers,
    findUserById,
    createUser,
    deleteUser,
    updateUser
} from "./users-dao.js";

import usersModel from "./users-model.js"


let currentUser = null

const templateUser = {
    username: "",
    email: ""
}

const UserController = (app) => {

    const createUserIn = async (req, res) => {
        const user = req.body
        const actualUser = await createUser(user)
        res.json(actualUser)
    }

    const findAllUsersIn = async (req, res) => {
        const users = await findAllUsers();
        res.json(users);
    }

    const deleteUserIn = async (req, res) => {
        const uid = req.params.uid
        const status = await deleteUser(uid)
        res.json(status)
    }

    const updateUserIn = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await updateUser(uid, updates)
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body;

        const existingUser = await findUserByUsername(user.username)
        console.log(user.username)

        if (existingUser) {
            res.sendStatus(403)
            return
        }

        const actualUser = await createUser(user)

        console.log(actualUser)
        //req.session['currentUser'] = currentUser
        currentUser = actualUser
        res.json(actualUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        console.log(credentials)
        const existingUser = await findUserByCredentials(credentials.username, credentials.password);
        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }

    const logout = async (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    //?
    const profile = async (req, res) => {
        if (currentUser) {
            res.json(currentUser)
            return
        }
        res.sendStatus(403)
    }

    app.post('/api/register', register);
    app.post('/api/login', login)
    app.post('/api/logout', logout)
    app.post('/api/profile', profile)

    app.get('/api/users', findAllUsersIn)
    app.put('/api/user', updateUserIn)
    app.delete('/api/user', deleteUserIn)

}
export default UserController;