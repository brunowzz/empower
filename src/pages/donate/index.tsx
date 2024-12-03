import book from "../../assets/book.png";
import S from "./index.module.scss";

export default function Donate() {
  return (
    <main className={S.donate}>
      <h2 className={S.donate__subtitle}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>

      <form className={S.donate__form}>
        <div className={S.donate__form__title}>
          <img src={book} alt="book" />
          <h3>Informações do Livro</h3>
        </div>
        <input
          className={S.donate__form__input}
          type="text"
          placeholder="Titulo"
        />
        <input
          className={S.donate__form__input}
          type="text"
          placeholder="Categoria"
        />
        <input
          className={S.donate__form__input}
          type="text"
          placeholder="Autor"
        />
        <input
          className={S.donate__form__input}
          type="text"
          placeholder="Link da Imagem"
        />

        <input
          className={S.donate__form__submit}
          type="submit"
          value="Donate"
        />
      </form>
    </main>
  );
}
