function authenticateUser(username, password) {
    const data = [
        { username: 'user', password: 'password' }
    ];

    return data.some(user => user.username === username && user.password === password);
}
