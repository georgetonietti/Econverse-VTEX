import { CiSearch } from 'react-icons/ci';
import '../../styles/components/header/input.sass';

export default function Input() {
  return (
    <form className="formContent" role="search" aria-label="Buscar produtos">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="O que você está buscando?"
        aria-label="O que você está buscando?"
      />
      <button type="submit" aria-label="Buscar">
        <CiSearch />
      </button>
    </form>
  );
}
