// ProfileStats.tsx
const ProfileStats = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Profile Stats</h1>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 bg-white p-4 rounded-xl shadow-sm">
        {/* Left stats */}
        <div className="space-y-3 w-full lg:w-1/2">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm">Current XP:</span>
            <span className="text-xl font-semibold">70</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Current Streak:</span>
            <span className="font-medium">2</span>
          </div>
        </div>

        {/* Right stats */}
        <div className="space-y-3 w-full lg:w-1/2 lg:pl-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm">Total XP:</span>
            <span className="text-xl font-semibold">1250</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Total Streak:</span>
            <span className="font-medium">5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
