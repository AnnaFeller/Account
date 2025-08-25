export const base_url = 'https://forum-d195c12efa27.herokuapp.com'

export const base_user = 'https://forum-d195c12efa27.herokuapp.com/account/login'

export const createUser = (firstName:string , lastName:string)=>
    (
        `Basic ${btoa(`${firstName}:${lastName}`)}`
    )

export const createToken = (login:string, password:string)=>
    (
        `Basic ${btoa(`${login}:${password}`)}`
    )