const baseUrl = "http://127.0.0.1:5000";

const headers = {
    "Content-Type": "application/json",
}

const get = async (url, data, options) => {
    if (data) return await fetch(url, {
        body: JSON.stringify(data), headers: headers, ...options
    })
    else return await fetch(url);
}

const post = async (url, data, options) => {
    return await fetch(url, {
        method: "POST", body: JSON.stringify(data), headers: headers, ...options
    })
}

const put = async (url, data, options) => {
    return await fetch(url, {
        method: "PUT", body: JSON.stringify(data), headers: headers, ...options
    })
}

const patch = async (url, data, options) => {
    return await fetch(url, {
        method: "PATCH", body: JSON.stringify(data), headers: headers, ...options
    })
}


const login = async (email, password) => {
    const url = `${baseUrl}/login`;

    const data = {
        email,
        password
    }

    const response = await post(url, data)

    return await response.json();
}

const registerUser = async (name, email, password, birthdate, weight, weightGoal, height, isMale) => {
    const url = `${baseUrl}/register`;

    const data = {
        name,
        email,
        password,
        birthdate,
        weight,
        weightGoal,
        height,
        isMale
    }

    const response = await post(url, data);

    return response.json();
}

const getUser = async (id) => {
    const url = `${baseUrl}/users/${id}`
    const response = await get(url);
    return response.json();
}

const updateUser = async (userId, user) => {
    const url = `${baseUrl}/users/${userId}`
    console.log(user);

    const response = await patch(url, user, { mode: 'cors' });

    return response.json();
}

const addRoutine = async (userId, routine) => {
    const url = `${baseUrl}/users/${userId}/routines`
}

const postFood = async (userId, food) => {
    const url = `${baseUrl}/users/${userId}/foods`;

    const response = await post(url, food, { mode: 'no-cors' });

    return await response.json();

}



module.exports = {
    login,
    registerUser,
    getUser,
    updateUser,
    addRoutine,
    postFood,
}