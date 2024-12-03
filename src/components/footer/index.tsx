import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import twitt from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import S from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <section className={S.footer__links}>
        <h3 className={S.footer__links__phone}>4002-8922</h3>
        <nav>
          <img src={face} alt="facebook" /> <img src={twitt} alt="twitter" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />
          <img src={insta} alt="insta" />
        </nav>
      </section>
      <section className={S.footer__end}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
