import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser";

const Profile = () => {
    return (
        <div>
            <ProfileData/>
            <button>Log out</button>
            <UpdateUser/>
            </div>
    );
};

export default Profile;