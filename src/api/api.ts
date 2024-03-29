import axios, { AxiosResponse } from "axios";

export type DataType = {
    id: number | null
    login: string | null
    email: string | null
}
type AuthResponseType = ResponseType<DataType> & { fieldsErrors: Array<string> }
type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type ItemType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    status: string | null
    followed: boolean
}
export type GetUsersResponseType = {
    items: Array<ItemType>
    totalCount: number
    error: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | undefined
    photos: { small: string | undefined, large: string | undefined }
}

export type ValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        facebook: string;
        website: string;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string;
        github: string;
        mainLink: string;
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '6c600c87-cd10-4399-80d8-d0a35356bfb5'
    }
})

export const authAPI = {
    authMe() {
        return instance.get<AuthResponseType>(`auth/me`)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post<{}, AxiosResponse<ResponseType<{ userId: number }>>>(`auth/login`, { email, password, rememberMe, captcha })
    },
    logOut() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
    },
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get<UserProfileType>(`/profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get<string>(`profile/status/${id}`)
    },
    updateMyStatus(status: string) {
        return instance.put<any, AxiosResponse<ResponseType>>(`profile/status`, { status })
    },
    savePhoto(image: File) {
        const formData = new FormData()
        formData.append("image", image)
        return instance.put<any, AxiosResponse<ResponseType<{ photos: { small: string, large: string } }>>>(`profile/photo`, formData)
    },
    saveProfile(profile: ValuesType) {
        return instance.put<ValuesType, AxiosResponse<ResponseType>>(`/profile`, profile)
    },
}

export const usersAPI = {
    getUsers(pageSize: number, page: number) {
        return instance.get<GetUsersResponseType>(`users?count=${pageSize}&page=${page}`)
    },
    follow(id: number) {
        return instance.post<any, AxiosResponse<ResponseType>>(`follow/${id}`)
    },
    unFollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
}