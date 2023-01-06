import users from '../data/users.js';
import defaultAxios from '../../communicator/commHttp/defaultAxios.js';

// declaring the query functions that get resolved by the resolver

const getAllUsers = async (params) => {
    // return users;

    const connector = new defaultAxios();
    const response = await connector.client.get('/api/v1/access', params);
    console.log('access reponse : ', response.data);
    return response.data;
}

const getUserById = (id) => {
    return users.find((user) => user.id === id);
}

const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
}

export { getAllUsers, getUserById, getUserByUsername };