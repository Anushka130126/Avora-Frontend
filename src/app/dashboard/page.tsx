export default function DashboardHome() {
  const kpis = [
    { title: 'Total Revenue (MTD)', value: '$124,500', change: '+14.5%', isPositive: true },
    { title: 'Active Projects', value: '24', change: '+2', isPositive: true },
    { title: 'Team Utilization', value: '87%', change: '-2%', isPositive: false },
    { title: 'AI Model Accuracy (Avg)', value: '94.2%', change: '+1.1%', isPositive: true },
  ];

  const recentProjects = [
    { id: 'PRJ-1042', name: 'Acme Corp RAG Agent', client: 'Acme Corp', type: 'AI Solution', status: 'In Progress', date: 'Oct 24, 2023' },
    { id: 'PRJ-1041', name: 'Globex Mobile App', client: 'Globex Inc', type: 'Custom Dev', status: 'QA', date: 'Oct 22, 2023' },
    { id: 'PRJ-1040', name: 'Soylent Data Pipeline', client: 'Soylent Corp', type: 'Data Analytics', status: 'Deployed', date: 'Oct 18, 2023' },
    { id: 'PRJ-1039', name: 'Initech BPO Support', client: 'Initech', type: 'BPO', status: 'Completed', date: 'Oct 15, 2023' },
    { id: 'PRJ-1038', name: 'Stark Predictor Model', client: 'Stark Ind.', type: 'AI Solution', status: 'Discovery', date: 'Oct 10, 2023' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Deployed':
      case 'Completed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">{status}</span>;
      case 'In Progress':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">{status}</span>;
      case 'QA':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">{status}</span>;
      case 'Discovery':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">{status}</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</h3>
            <div className="flex items-end justify-between mt-auto">
              <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
              <div className={`flex items-center text-sm font-medium ${kpi.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.isPositive ? (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                ) : (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                )}
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">Recent Projects</h2>
          <button className="text-sm font-medium text-accent-blue hover:text-accent-blue-hover transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project ID</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {recentProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{project.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">{project.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{project.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{project.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(project.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{project.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
