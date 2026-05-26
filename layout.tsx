export default function Home() {
  const missions = [
    {
      id: 1,
      title: "Bunker-Sicherung auf Hurston",
      status: "Offen",
      reward: "120.000 aUEC",
    },
    {
      id: 2,
      title: "Cargo Eskorte nach MicroTech",
      status: "In Bearbeitung",
      reward: "85.000 aUEC",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        STAR CITIZEN ORGA HUB
      </h1>

      <div className="grid gap-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="border border-cyan-800 rounded-2xl p-5 bg-gray-900"
          >
            <h2 className="text-2xl font-semibold text-cyan-200">
              {mission.title}
            </h2>

            <p className="mt-2 text-gray-300">
              Status: {mission.status}
            </p>

            <p className="text-gray-400">
              Belohnung: {mission.reward}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
