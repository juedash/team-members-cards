import team from "../team-members.json";
import TeamCard from "./TeamCard";

const TeamList = () => {
  return (
    <section className="bg-blue-50 px-4 py-12">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 text-center">
          Meet our Team
        </h2>
        <p className="text-slate-600 text-center mt-2 mb-10">
          The people behind the work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamList;
