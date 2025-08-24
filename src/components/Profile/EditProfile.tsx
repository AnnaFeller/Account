import {useState} from "react";

 interface EditProfileProps {
     close:()=> void;

 }

const EditProfile = ({close}:EditProfileProps) => {

    const [login, setLogin] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClickSave = () => {
        //  TODO save in edit profile
        alert(`Edit profile ${login} , ${firstName}, ${lastName}`)
        close()

    }

    const handleClickClear=()=>{
        setLogin('')
        setFirstName('')
        setLastName('')
    }
    return (
        <>
            <label>Login:
                <input type='text'
                       onChange={e => setLogin(e.target.value)}
                       value={login}
                />
            </label>

            <label>First Name:
                <input type='text'
                       onChange={e => setFirstName(e.target.value)}
                       value={firstName}
                />
            </label>
            <label>Last Name:
                <input type='text'
                       onChange={e => setLastName(e.target.value)}
                       value={lastName}
                />
            </label>


            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without save</button>
            <button onClick={handleClickClear}>Clear</button>

        </>

    )};

export default EditProfile;