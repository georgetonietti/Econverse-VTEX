import { Link } from "react-router-dom";
import "../../styles/components/navTable/navTable.sass"

export default function NavTable() {

    const navTableCategory = ['CELULAR', "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"]

    return (
        <nav className="navTableContent">
            <ul>
                {navTableCategory.map((content, index) => (
                    <li key={index+1}>
                        <Link to="/">{content}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}