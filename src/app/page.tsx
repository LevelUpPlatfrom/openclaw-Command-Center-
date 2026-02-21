// Command Centre Dashboard - page.tsx

const objectives = [
  {
    id: 1,
    title: 'Build and Deploy "Mission Control" App',
    status: 'Completed',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    title: 'Define the Q2 2026 Product Roadmap for LevelUp',
    status: 'Completed',
    statusColor: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Outline and Draft a Core University Essay or Project',
    status: 'Not Started',
    statusColor: 'bg-gray-500',
  },
  {
    id: 4,
    title: 'Design a System for Tracking Your Goals and Habits',
    status: 'Not Started',
    statusColor: 'bg-gray-500',
  },
  {
    id: 5,
    title: 'Conduct Our First Weekly Review',
    status: 'Not Started',
    statusColor: 'bg-gray-500',
  },
  {
    id: 6,
    title: 'Resolve My Blocked Tools',
    status: 'Blocked',
    statusColor: 'bg-red-500',
  },
  {
    id: 7,
    title: 'Brainstorm and Triage a "Quick Wins" Backlog for LevelUp',
    status: 'Completed',
    statusColor: 'bg-green-500',
  },
];

const systemStatus = [
    { name: 'sessions_spawn (levelup-architect)', status: 'Blocked', details: 'Manual config edit required.' },
    { name: 'web_search (Brave API)', status: 'Blocked', details: 'API key missing.' },
    { name: 'Browser Control', status: 'Offline', details: 'Service unavailable.' },
];

const keyArtifacts = [
    { name: 'LevelUp Q2 Roadmap', path: 'levelup/Q2_Roadmap.md' },
    { name: 'LevelUp Master Index', path: 'LevelUp_Master_Index.json' },
    { name: 'Project Profile', path: 'project_profiles/levelup_profile.json' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold tracking-tighter">Mission Control</h1>
          <p className="mt-2 text-xl text-gray-400">
            A real-time dashboard for the LevelUp Skill Engine initiative.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Project Mission</h2>
                <p className="text-gray-300 italic">
                    "LevelUp is a skill engine that transforms disciplined action into verified digital identity, turning real growth into undeniable proof. Its mission is to make competence visible, reward earned ability over empty status, and build a world where effort compounds into reputation, access, and power."
                </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4">Key Objectives</h2>
              <ul className="space-y-4">
                {objectives.map((obj) => (
                  <li key={obj.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
                    <span className="font-medium">{obj.title}</span>
                    <span className={`px-3 py-1 text-sm font-bold rounded-full text-white ${obj.statusColor}`}>
                      {obj.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">System Status</h2>
              <ul className="space-y-3">
                {systemStatus.map((item) => (
                    <li key={item.name} className="flex items-center">
                        <span className={`h-3 w-3 rounded-full mr-3 ${item.status === 'Blocked' || item.status === 'Offline' ? 'bg-red-500' : 'bg-green-500'}`}></span>
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-400">{item.details}</p>
                        </div>
                    </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Key Artifacts</h2>
              <ul className="space-y-2">
                 {keyArtifacts.map((artifact) => (
                    <li key={artifact.name} className="text-blue-400 hover:underline cursor-pointer">
                        {artifact.path}
                    </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
