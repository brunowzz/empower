import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import S from "./index.module.scss";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className={S.header}>
      <section className={S.header__logo}>
        <NavLink to="/">
          <img
            className={S.header__logo__image}
            src={logo}
            alt="imagem de um livro"
          />
        </NavLink>
        <NavLink to="/">
          <h1 className={S.header__logo__title}>Livros Vai na Web</h1>
        </NavLink>
      </section>
      <nav className={S.header__links}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/donated">Livros Doados</NavLink>
        <NavLink to="/donate">Quero Doar</NavLink>
      </nav>
      <div className={S.header__search}>
        <input
          className={S.header__search__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="search" />
      </div>
    </header>
  );
}
