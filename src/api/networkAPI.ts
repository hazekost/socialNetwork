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
type followUnFollowReturnType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "api-key": "27636629-bdcd-409c-933a-c0c1a7e1a005"
    }
})

export const networkAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersReturnType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId: string) {
        return instance.get<getUserProfileReturnType>(`profile/${userId}`)
    },
    getAuth() {
        return instance.get<AuthReturnType>("auth/me")
    },
    follow(userId: number) {
        return instance.post<followUnFollowReturnType>(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<followUnFollowReturnType>(`follow/${userId}`)
    }
}