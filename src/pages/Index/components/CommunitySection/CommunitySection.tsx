import AthleteGlassCard from "../AthleteGlassCard";
import JudgeGlassCard from "../JudgeGlassCard";
import TrainerGlassCard from "../TrainerGlassCard";

function CommunitySection() {
  return (
    <div className="section-wrapper bg-gray-6 max-lg:px-4">
      <section className="community">
        <h2>Forma parte de la comunidad:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AthleteGlassCard />
          <TrainerGlassCard />
          <JudgeGlassCard />
        </div>
      </section>
    </div>
  );
}

export default CommunitySection;
