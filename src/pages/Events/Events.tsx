import SponsorsBar from "@/components/SponsorsBar/SponsorsBar";
import RegionsMap from "./components/RegionsMap/RegionsMap";
import GrayCrossDecoration from "./components/GrayCrossDecoration/GrayCrossDecoration";
import RedCrossDecoration from "./components/RedCrossDecoration/RedCrossDecoration";

import styles from "./Events.module.css";

function Events() {
  return (
    <div>
      <GrayCrossDecoration />
      <RedCrossDecoration />
      <section className={styles.hero}>
        <h1>
          Participa en uno de los
          <br /> Regionales más cerca de ti
        </h1>
        <p className={styles.subtitle}>
          Busca tu región y empieza tu camino en la MF3, ¡afíliate y participa
          para representar a tu región!
        </p>
        <p>
          ¡Busca la información más actual en nuestras redes sociales!
          <br />
          <br />
          Actualmente, se estarán llevando a cabo los Regionales de las{" "}
          <span className="font-semibold">Regiones 1, 2, 3</span> y{" "}
          <span className="font-semibold">5</span>, ingresa y comienza tu
          proceso de afiliación.
        </p>
        <a className={styles.button}>Comenzar Proceso</a>
        <div className="h-[12.5rem] w-full mt-auto flex flex-1 bg-green-neutral/80 z-10" />
      </section>
      <div className="max-lg:hidden absolute top-[746px] inset-x-0 mx-auto z-20 w-[69rem] min-w-[69rem]">
        <SponsorsBar />
      </div>
      <section className="flex flex-col items-center bg-gray-1 pt-[13.25rem] text-gray-5 px-20 lg:px-[8.5rem] pb-28">
        <h2 className="text-center font-bebas text-6xl">
          Pasos para participar en <br />
          <span className="text-green-dark">el regional</span>
        </h2>
        <div className="flex max-md:flex-col flex-auto w-full mt-10 mb-[10.5rem] justify-between gap-4 md:gap-20">
          <div className="flex flex-col gap-3 py-8 px-10 lg:px-24 border border-gray-2 rounded-2xl max-w-[27.125rem] relative">
            <span className="font-bebas text-[17.5rem] text-gray-2 leading-[336px] absolute -left-[4.5rem] bottom-0">
              1
            </span>
            <p className="font-bold text-2xl text-green-dark">
              Participa en los Preliminares Online
            </p>
            <p className="leading-[1.625rem]">
              Sigue las redes de nuestra federación y la de tu estado y entérate
              de las fechas de los eventos de tu región, inscríbete y participa
              con otros atletas y da un paso hacia los Regionales de la MF3, un
              peldaño más hacia el Worlds 2024 Hungría.
            </p>
          </div>
          <div className="flex flex-col gap-3 py-8 px-10 lg:px-24 border border-gray-2 rounded-2xl max-w-[27.125rem] relative">
            <span className="font-bebas text-[17.5rem] text-gray-2 leading-[336px] absolute -left-[4.5rem] bottom-0">
              2
            </span>
            <p className="font-bold text-2xl text-green-dark">
              Compite en tu Región
            </p>
            <p className="leading-[1.625rem]">
              Llega a la justa más importante de tu Región. Los Regionales MF3
              son donde los mejores atletas se enfrentan para tener la
              posibilidad de representar a su Región en la justa nacional más
              importante del país.
            </p>
          </div>
        </div>
        <RegionsMap />
      </section>
    </div>
  );
}

export default Events;
