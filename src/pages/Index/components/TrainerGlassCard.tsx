import GlassCard from "../../../components/GlassCard/GlassCard";
import unionSvg from "../../../assets/union.svg";

function TrainerGlassCard() {
  return (
    <GlassCard>
      <div className="self-center relative">
        <img src={unionSvg} className="absolute m-auto inset-0" />
        <div className="rounded-full h-20 w-20 bg-mustard opacity-20 blur-lg"></div>
      </div>
      <p className="title">
        Certificación <span className="text-mustard">Entrenador</span>
      </p>
      <p className="font-semibold">
        Sé uno de los primeros entrenadores certificados por la Federación,
        forma nuevos talentos y ayuda a que más personas tengan una mejor
        calidad de vida.
      </p>
      <p>
        Forma parte de la estructura más importante de la MF3, cuida la calidad
        de nuestra disciplina y representa a la MF3 en tu gimnasio y localidad.
      </p>
      <div className="action-wrapper">
        <a className="bg-mustard">Certificarme</a>
      </div>
    </GlassCard>
  );
}

export default TrainerGlassCard;
