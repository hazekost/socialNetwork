import axios from "axios";

type AuthReturnType = {
    data: {
        id: number
        login: string
        email: string
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}
type getUsersReturnType = {
    error: string
    items: Array<{name: string, id: number, uniqueUrlName: string, photos: {small: string, large: string}, followed: boolean, status: string}>
    totalCount: number
}
type getUserProfileReturnType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number
}
export type ReturnType<D={}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "api-key": "6c600c87-cd10-4399-80d8-d0a35356bfb5"
    }
})

export const networkAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersReturnType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId: number) {
        return instance.get<getUserProfileReturnType>(`profile/${userId}`)
    },
    getAuth() {
        return instance.get<AuthReturnType>(`auth/me`)
    },
    follow(userId: number) {
        return instance.post<ReturnType>(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<ReturnType>(`follow/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ReturnType>(`profile/status`, {status})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put<ReturnType<{small: string, large: string}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}