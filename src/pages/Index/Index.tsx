import SponsorsBar from "../../components/SponsorsBar/SponsorsBar";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import SocialSection from "./components/SocialSection/SocialSection";
import mf3Logo from "../../assets/mf3-logo.svg";
import aboutUsPicture from "../../assets/about-us-picture.png";

import "./Index.css";
import RoadmapSection from "./components/RoadmapSection/RoadmapSection";

function Index() {
  return (
    <>
      <section className="hero">
        <h1>
          Bienvenidos a la casa del
          <br /> Functional Fitness en México
        </h1>
        <p className="subtitle mt-8">
          Entérate del Calendario 2024 en nuestras redes sociales y participa en
          nuestros eventos.
        </p>
        <p>
          Participa en nuestros eventos online y asegura tu lugar en los Eventos
          Regionales de la MF3.
        </p>
        <a className="button">Comenzar</a>
      </section>
      <div className="absolute top-[626px] inset-x-0 mx-auto z-10 w-[69rem] min-w-[69rem]">
        <SponsorsBar />
      </div>
      <div className="section-wrapper bg-black">
        <section className="about-us">
          <div>
            <h2>¿Quiénes somos?</h2>
            <div className="flex flex-col gap-2 mb-16">
              <p className="font-semibold	text-lg">
                Bienvenidos a la <span className="text-gold">MF3</span>, tu casa
                para todo lo relacionado con el Functional Fitness y la huella
                que dejarás en la disciplina.
              </p>
              <p>
                La Federación somos un equipo multidisciplinario, dedicados a la
                trascendencia del deporte, y los participantes.
              </p>
              <p>
                Somos un organismo que estandariza y regula el deporte en muchos
                ámbitos, desde la concepción del deporte a la realización de
                eventos cerca de ti.
              </p>
            </div>
            <p className="font-semibold text-gold text-lg">
              Nuestra aportación al deporte la podrás ver en:
            </p>
            <br />
            <ul className="list-disc list-inside">
              <li>Sistema de Jueces Regulados por la Federación</li>
              <li>Sistemas de Puntuación Regulados</li>
              <li>
                Sistemas deportivos estandarizados con base en los lineamientos
                de la Federación Internacional de Functional Fitness IF3
                (Creación de Manuales Deportivos, de Jueceo y de Entrenamiento,
                así como Ética y Responsabilidad en el Deporte)
              </li>
              <li>
                Calendarización deportiva para crear y dar oportunidad a eventos
                existentes de formar parte del camino a los Nacionales MF3, que
                determinan quienes serán los delegados nacionales en eventos
                internacionales.
              </li>
              <li>
                Estandarización de Eventos Online y Presenciales. (Sistemas de
                Jueceo y Puntuación, así como requerimientos mínimos para el
                desempeño del deporte y los eventos físicos u online de una
                manera satisfactoria y justa)
              </li>
            </ul>
          </div>
          <div className="relative min-w-[470px] flex justify-end -z-10">
            <img
              src={mf3Logo}
              className="absolute -bottom-20 right-[322px] h-[179px]"
            />
            <img src={aboutUsPicture} className="" />
          </div>
        </section>
      </div>
      <CommunitySection />
      <RoadmapSection />
      <SocialSection />
    </>
  );
}

export default Index;
