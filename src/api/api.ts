import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "575f6457-2dce-4d8c-8a93-e34c4047ccac"
    }

})

export const getUsersApi = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const changePageApi = (pageNumber: number, pageSize: number) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response =>   response.data)
}

export const followAPI = (userId: number) => {
    return instance.post(`/follow/${userId}`).then(response => response.data.resultCode)
}

export const unFollowAPI = (userId: number) => {
    return instance.delete(`/follow/${userId}`).then(response => response.data.resultCode)
}


export const amIloggedInAPI = () => {
    return instance.get(`auth/me`)
}

export const getProfileAPI = (userId: number) => {
    return instance.get(`profile/${userId}`)
}

export const getProfileStatusAPI = (userId: string) => {
    return instance.get(`profile/status/${userId}`)
}


export const setProfileStatusAPI = (status: string) => {
    return instance.put(`profile/status`, {status})
}


export const loginAPI = (payload: any) => {
    return instance.post(`auth/login`, {email: payload.email, password: payload.password})
}

export const logoutAPI = () => {
    return instance.delete(`auth/login`)
}
