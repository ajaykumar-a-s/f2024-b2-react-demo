//export default
import './Profile.css'

export const name = "ford";
export const email = "info@ford.com"
export const namesArray = ["Ford","Maruthi"];
export function Button() {
    return (
        <button> Button</button>
    );
}

function Profile() {

    return (
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" className="profile-img"></img>
    );

}

export default Profile;