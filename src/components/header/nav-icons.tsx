import { Link } from "react-router-dom";
import { BsBox2,  } from "react-icons/bs";
import { PiHeartLight, PiUserCircle, PiShoppingCart  } from "react-icons/pi";
import '../../styles/components/header/nav-icons.sass'

export default function NavIcons() {
    return (
        <nav className="navIconsContent">
            <ul>
                <li>
                    <Link to='#'>
                        <BsBox2 className="box"/>
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <PiHeartLight />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <PiUserCircle />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <PiShoppingCart />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}