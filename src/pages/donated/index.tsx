import booksdoados from "../../assets/donated-books.png";
import S from "./index.module.scss";

export default function Donated() {
  return (
    <main className={S.donated}>
      <h2 className={S.donated__subtitle}>Livros Doados</h2>
      <section className={S.donated__container}>
        <div className={S.donated__container__card}>
          <img src={booksdoados} alt="livro o protagonista" />
          <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </div>
      </section>
    </main>
  );
}
