// Profile.tsx
import AchievementsSection from "./components/achievements/AchievementsSection";
import StatsSections from "./components/profileStats/StatsSections";
import SettingsSection from "./components/settings/SettingsSection";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-6 flex-1 items-stretch">
      {/* Left column: Stats + Achievements */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <StatsSections />
        <AchievementsSection />
      </div>

      {/* Right column: Settings (stretches full height) */}
      <div className="w-full lg:flex-1 flex">
        <SettingsSection />
      </div>
    </div>
  );
};

export default Profile;
