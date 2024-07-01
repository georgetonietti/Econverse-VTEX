import Input from './input';
import MessageBar from './message-bar';
import NavIcons from './nav-icons';
import Navbar from './navbar';
import { PiShieldCheckBold, PiTruck, PiCreditCard } from 'react-icons/pi';
import '../../styles/components/header/header.sass';

export default function Header() {
    return (
        <header className="container">
            <div className="containerMessageBar">
                <MessageBar icon={PiShieldCheckBold}>
                    <p>
                        Compra <span>100% segura</span>
                    </p>
                </MessageBar>
                <MessageBar icon={PiTruck}>
                    <p>
                        <span>Frete grátis</span> acima de R$ 200
                    </p>
                </MessageBar>
                <MessageBar icon={PiCreditCard}>
                    <p>
                        <span>Parcele</span> suas compras
                    </p>
                </MessageBar>
            </div>
            <hr />
            <div className="containerSearch">
                <img src="/vtex-logo.png" alt="Logo da VTEX" width={139} loading="lazy" />
                <Input />
                <NavIcons />
            </div>
            <hr />
            <nav className="containerMenuNavbar">
                <Navbar />
            </nav>
        </header>
    );
}
