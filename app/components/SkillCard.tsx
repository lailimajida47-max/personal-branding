interface SkillCardProps {
  name: string;
  level: string;
}

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-bold text-sky-600">{name}</h3>
      <p className="text-sm text-slate-600">{level}</p>
    </div>
  );
}

