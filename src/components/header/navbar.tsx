import { Link } from "react-router-dom";
import { TbCrown } from "react-icons/tb";
import '../../styles/components/header/navbar.sass'

export default function Navbar() {

    const navbarCategory = ['TODAS CATEGORIAS', "SUPERMERCADO", "LIVROS", "MODA", "LANÇAMENTOS", "OFERTAS DO DIA", "ASSINATURA"]

    return (
        <nav className="navbarContent">
            <ul>
                {navbarCategory.map((content, index) => {
                    if(content == "ASSINATURA"){
                        return (
                            <li key={index+1}>
                                <Link to="/">
                                    <TbCrown />
                                    {content}
                                </Link>
                            </li>
                        )
                    }
                    return (
                        <li key={index+1}>
                            <Link to="/">{content}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}