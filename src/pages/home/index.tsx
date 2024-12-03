import read from "../../assets/read.png";
import network from "../../assets/network.png";
import balance from "../../assets/balance.png";
import transform from "../../assets/transform.png";
import S from "./index.module.scss";

export default function Home() {
  return (
    <main className={S.home}>
      <section className={S.home__post}>
        <h2 className={S.home__post__title}>
          VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
        </h2>
      </section>
      <section className={S.home__donate}>
        <h2 className={S.home__donate__title}>Por que devo doar?</h2>

        <div className={S.home__donate__container}>
          <div className={S.home__donate__container__card}>
            <img src={network} alt="network" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </div>
          <div className={S.home__donate__container__card}>
            <img src={read} alt="read" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={S.home__donate__container__card}>
            <img src={transform} alt="transform" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>
          <div className={S.home__donate__container__card}>
            <img src={balance} alt="transform" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
