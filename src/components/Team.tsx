import { cn } from '@/lib/cn';

export default function Team() {
  const team = [
    {
      name: "Vaibhav Sharma",
      title: "Founder & CEO",
      initials: "VS",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      name: "Alex Rivera",
      title: "Head of Engineering",
      initials: "AR",
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
    {
      name: "Sarah Chen",
      title: "AI Solutions Lead",
      initials: "SC",
      color: "bg-sky-100 text-sky-700 border-sky-200",
    },
    {
      name: "Marcus Johnson",
      title: "Operations Director",
      initials: "MJ",
      color: "bg-slate-100 text-slate-700 border-slate-200",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2 block">Our People</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Built By Experts</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div 
                className={cn(
                  "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-2xl font-heading font-bold mb-4 border transition-transform duration-300 group-hover:scale-105 shadow-sm",
                  member.color
                )}
              >
                {member.initials}
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm text-slate-500 font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
