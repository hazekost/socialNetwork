import axios, { AxiosResponse } from "axios";

export type DataType = {
    id: number
    login: string
    email: string
}
type authResponseType = {
    data: DataType
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}
type followUnfollowResponseType = {
    resultCode: number
    messages: Array<string>
    data: Object
}
export type ItemType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    status: string | null
    followed: boolean
}
export type GetUsersType = {
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
    userId: number
    photos: { small: string, large: string }
}
type UpdateMyStatusResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '6c600c87-cd10-4399-80d8-d0a35356bfb5'
    }
})

export const socialAPI = {
    authMe() {
        return instance.get<authResponseType>(`auth/me`)
    },
    getUsers(pageSize: number, page: number) {
        return instance.get<GetUsersType>(`users?count=${pageSize}&page=${page}`)
    },
    follow(id: number) {
        return instance.post<any, AxiosResponse<followUnfollowResponseType>>(`follow/${id}`)
    },
    unFollow(id: number) {
        return instance.delete<followUnfollowResponseType>(`follow/${id}`)
    },
    getUserProfile(id: string) {
        return instance.get<UserProfileType>(`/profile/${id}`)
    },
    getUserStatus(id: string) {
        return instance.get<string>(`profile/status/${id}`)
    },
    updateMyStatus(status: string) {
        return instance.put<{ status: string }, AxiosResponse<UpdateMyStatusResponseType>>(`profile/status`, { status })
    }
}