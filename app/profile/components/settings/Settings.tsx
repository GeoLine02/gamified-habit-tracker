import { logout } from "@/actions/auth/auth";
import Input from "@/components/ui/Input";

const Settings = () => {
  return (
    <section className="flex flex-col flex-1">
      <h1 className="text-2xl font-semibold mb-3">Settings</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-8 flex-1 lg:flex-0 h-full">
        {/* Username Section */}
        <div className="flex flex-col lg:flex-row items-end gap-4 w-full">
          <Input className="w-full md:w-auto">
            <Input.Label htmlFor="currentUsername">Change Username</Input.Label>
            <Input.Field id="currentUsername" placeholder="Current Username" />
          </Input>
          <button className="w-full md:w-auto py-2 px-6 bg-custom-green text-white font-medium rounded-xl border-2 border-custom-green hover:bg-custom-green/90 transition cursor-pointer whitespace-nowrap">
            Change Username
          </button>
        </div>

        <hr className="border-medium-gray/20" />

        {/* Password Section */}
        <div className="flex flex-col gap-4 lg:flex-row items-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input>
              <Input.Label htmlFor="currentPassword">
                Current Password
              </Input.Label>
              <Input.Field
                id="currentPassword"
                placeholder="Current password"
                type="password"
              />
            </Input>
            <Input>
              <Input.Label htmlFor="newPassword">New Password</Input.Label>
              <Input.Field
                id="newPassword"
                placeholder="New password"
                type="password"
              />
            </Input>
          </div>
          <button className="w-full md:w-auto py-2 px-6 bg-custom-green text-white font-medium rounded-xl border-2 border-custom-green hover:bg-custom-green/90 transition self-end cursor-pointer whitespace-nowrap">
            Change Password
          </button>
        </div>

        <hr className="border-medium-gray/20" />

        {/* Log Out Section */}
        <div>
          <button
            onClick={logout}
            className="w-full py-3 px-4 bg-medium-gray font-medium text-white rounded-xl hover:bg-medium-gray/90 transition lg:w-auto cursor-pointer whitespace-nowrap"
          >
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
