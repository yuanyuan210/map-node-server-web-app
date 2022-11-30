// import people from './users.js'

// let users = people

// let currentUser = null

// const templateUser = {
//     "username": ""
// }
import * as dao from './users-dao.js';

const UserController = (app) => {

    const createUser = async (req, res) => {
        const newUser = req.body;
        const actualUser = await dao.createUser(newUser);
        res.json(actualUser);
    }

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    }

    const deleteUser = (req, res) => {
        const userId = req.params['uid'];
        const status = dao.deleteUser(userId);
        res.json(status);
    }

    const updateUser = (req, res) => {
        const userId = req.params['uid'];
        const updates = req.body;
        const status = dao.updateUser(userId, updates);
        res.json(status);
    }
    //*************
    const findUsers = (req, res) => {
        const role = req.query.role
        if (role) {
            const usersOfRole = users.filter(u => u.role === role)
            res.json(usersOfRole)
            return
        }
        res.json(users)
    }

    const findUserById = (req, res) => {
        const userId = req.params.uid;
        const user = users
        .find(u => u._id === userId);
        res.json(user);
    }

    const findUserByEmail = (req, res) => {
        const email = req.params.email;
        const user = users
        .find(u => u.email === email);
        res.json(user);
    }

    const register = (req, res) => {
        const newUser = req.body;
        // console.log(newUser)
        newUser._id = (new Date()).getTime() + '';
        users.push(newUser);
        res.json(newUser);
    }

    const login = (req, res) => {
        const credentials = req.body
        // console.log(credentials)
        const existingUser = users
            .find(u => u.username == credentials.username &&
                        u.password == credentials.password
                 );

        if (!existingUser) {
            res.sendStatus(403)
            return
        }

        res.json(existingUser)
    }

    const logout = (req, res) => {
        res.sendStatus(200)
    }


    app.get('/api/users/:email', findUserByEmail);

    app.get('/api/users/:uid', findUserById);


    app.post('/api/users', createUser);
    app.get('/api/users', findAllUsers);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);

    app.post('/api/register', register);
    app.post('/api/login', login)
    app.post('/api/logout', logout)

}

export default UserController;