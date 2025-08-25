export const base_url = 'https://forum-d195c12efa27.herokuapp.com'

export const createToken = (login:string, password:string)=>
    (
        `Basic ${btoa(`${login}:${password}`)}`
    )