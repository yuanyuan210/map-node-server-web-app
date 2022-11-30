import people from './users.js'

let users = people

let currentUser = null

const templateUser = {
    "username": ""
}

const UserController = (app) => {
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

    const createUser = (req, res) => {
        const newUser = req.body;
        newUser._id = (new Date()).getTime() + '';
        users.push(newUser);
        res.json(newUser);
    }

    const deleteUser = (req, res) => {
        const userId = req.params['uid'];
        users = users.filter(usr =>
            usr._id !== userId);
        res.sendStatus(200);
    }

    const updateUser = (req, res) => {
        const userId = req.params['uid'];
        console.log(userId);
        const updates = req.body;
        const usr = users.find((usr) => usr._id === userId);
        console.log(usr)
        const newUser = {...usr, ...updates};
        users = users.map((usr) =>
            usr._id === userId ?
                {...usr, ...updates} :
                usr
        );
        console.log(newUser)
        res.json(newUser);
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

        currentUser = existingUser
        res.json(existingUser)
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    app.get('/api/users', findUsers);
    app.get('/api/users/:email', findUserByEmail);

    app.get('/api/users/:uid', findUserById);

    app.post('/api/register', register);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);

    app.post('/api/login', login)
    app.post('/api/logout', logout)

}

export default UserController