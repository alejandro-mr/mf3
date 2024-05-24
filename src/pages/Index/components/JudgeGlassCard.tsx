import GlassCard from "../../../components/GlassCard/GlassCard";
import judgeSvg from "../../../assets/judge.svg";

function JudgeGlassCard() {
  return (
    <GlassCard>
      <div className="self-center relative">
        <img src={judgeSvg} className="absolute m-auto inset-0" />
        <div className="rounded-full h-20 w-20 bg-violet-neutral opacity-20 blur-lg"></div>
      </div>
      <p className="title">
        Acreditación <span className="text-violet-neutral">Juez</span>
      </p>
      <p className="font-semibold">
        Prepárate en el deporte y conviértete en un Juez Federado de la MF3,
        expande tu conocimiento del Functional Fitness y trabaja con tu
        comunidad durante eventos online y presenciales.
      </p>
      <p>
        Fortalece las bases de nuestro deporte al ser un Juez oficial de la MF3
        en eventos cercanos a ti, siempre asegurando una participación y
        competencia limpia.
      </p>
      <div className="action-wrapper">
        <a className="bg-violet-neutral">Acreditarme</a>
      </div>
    </GlassCard>
  );
}

export default JudgeGlassCard;
