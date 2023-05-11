import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogout() {
        userService.logOut(); //removes token from localstorage
        setUser(user); //nullify user state
    }

    return(
        <nav>
            <Link to="/orders"> Order History </Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new"> New Order </Link>
            {user && <span>&nbsp; Welcome, {user.name}</span>}
            <Link to="" onClick={handleLogout}>Log Out</Link>
        </nav>
    )
}