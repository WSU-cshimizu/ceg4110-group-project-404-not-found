const baseUrl = "http://127.0.0.1:5000";

const headers = {
    'Content-Type': "application/json; charset=utf8",
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

const del = async (url, options) => {
    return await fetch(url, {
        method: "DELETE", headers: headers, ...options
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

const registerUser = async (name, email, password, birthdate, weight, weightGoal, height, isMale, activityLevel) => {
    const url = `${baseUrl}/register`;

    const data = {
        name,
        email,
        password,
        birthdate,
        weight,
        weightGoal,
        height,
        isMale,
        activityLevel
    }

    const response = await post(url, data);

    return response.json();
}

const getAllUsers = async () => {
    const url = `${baseUrl}/users`
    const response = await get(url);
    return response.json();
}

const getUser = async (id) => {
    const url = `${baseUrl}/users/${id}`
    const response = await get(url);
    return response.json();
}

const updateUser = async (userId, user) => {
    const url = `${baseUrl}/users/${userId}`
    const response = await patch(url, user);
    return response.json();
}

const deleteUser = async (userId) => {
    const url = `${baseUrl}/users/${userId}`
    const response = await del(url)
    return response;
}

const getAllRoutines = async () => {
    const url = `${baseUrl}/routines`;
    const response = await get(url);
    return response.json();
}

const getRoutine = async (routineId) => {
    const url = `${baseUrl}/routines/${routineId}`;
    const response = await get(url);
    return response.json();
}

const createRoutine = async (userId, name) => {
    const url = `${baseUrl}/users/${userId}/routines`;
    const data = {
        name,
        "days": []
    }
    const response = await post(url, data);
    return response.json();
}

const updateRoutine = async (userId, routineId, name) => {
    const url = `${baseUrl}/users/${userId}/routines/${routineId}`;
    const data = {
        name,
        "days": []
    }
    const response = await patch(url, routine);
    return response.json();
}

const deleteRoutine = async (routineId) => {
    const url = `${baseUrl}/routines/${routineId}`;
    const response = del(url);
    return response;
}

const getAllExercises = async (routineId) => {
    const url = `${baseUrl}/users/routines/${routineId}/exercises`;
    const response = await get(url);
    return response.json();
}

const createExercise = async (routineId, name, type, duration, caloriesBurned, videoUrl) => {
    const url = `${baseUrl}/users/routines/${routineId}/exercises`;
    const data = {
        name,
        type,
        duration,
        caloriesBurned,
        videoUrl
    }
    const response = await post(url, data);
    return response.json();
}

const deleteExercise = async (exerciseId) => {
    const url = `${baseUrl}/exercises/${exerciseId}`;
    const response = await del(url);
    return response;
}

const getAllFoods = async (userId) => {
    const url = `${baseUrl}/users/${userId}/foods`;
    const response = await get(url);
    return response.json()
}

const addFood = async (userId, name, calories, protein, carbs, fats, mealType) => {
    const url = `${baseUrl}/users/${userId}/foods`;

    const data = {
        name,
        calories,
        protein,
        carbs,
        fats,
        mealType
    }
    const response = await post(url, data);
    return await response.json();
}

const deleteFood = async (foodId) => {
    const url = `${baseUrl}/foods/${foodId}`
    const response = await del(url);
    return response;
}



module.exports = {
    login,
    registerUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getAllRoutines,
    getRoutine,
    createRoutine,
    updateRoutine,
    deleteRoutine,
    getAllExercises,
    createExercise,
    deleteExercise,
    getAllFoods,
    addFood,
    deleteFood
}