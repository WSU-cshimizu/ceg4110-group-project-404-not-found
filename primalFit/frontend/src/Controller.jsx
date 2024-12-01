const baseUrl = "http://127.0.0.1:5000";

const headers = {
    "Content-Type": "application/json",
}


const post = async (url, data, options) => {

    console.log(data);
    return await fetch(url, {
        method: "POST", body: JSON.stringify(data), headers: headers, ...options
    })
}

const get = async (url, data) => {

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
    const url = `${baseUrl}/users`;

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
    addRoutine,
    postFood,
}