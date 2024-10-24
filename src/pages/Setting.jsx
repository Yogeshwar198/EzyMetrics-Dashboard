import React, { useState } from 'react';
import { data } from '../config/data';

const Setting = () => {
  const [profile, setProfile] = useState(data.settings.profile);
  const [notifications, setNotifications] = useState(data.settings.notifications);
  const [privacy, setPrivacy] = useState(data.settings.privacy);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleNotificationToggle = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [name]: checked,
    }));
  };

  const handlePrivacyToggle = (e) => {
    const { name, checked } = e.target;
    setPrivacy((prevPrivacy) => ({
      ...prevPrivacy,
      [name]: checked,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    // Check if password fields are filled and if they match
    if (passwords.newPassword || passwords.confirmPassword) {
      if (passwords.newPassword !== passwords.confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }
    }

    // Submit profile, notifications, privacy, and optional password change request
    alert("Settings updated successfully.");

    // Clear password fields after submission
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="settings-container p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <form onSubmit={handleProfileSubmit}>
        
        {/* Profile Section */}
        <div className="profile-section mb-6">
          <h3 className="text-lg font-semibold mb-2">Profile</h3>
          <div className="mb-4">
            <label className="block font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Language</label>
            <input
              type="text"
              name="language"
              value={profile.language}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Timezone</label>
            <input
              type="text"
              name="timezone"
              value={profile.timezone}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Password Change Section */}
          <div className="password-section mt-6">
            <h4 className="text-lg font-semibold mb-2">Change Password</h4>
            <div className="mb-4">
              <label className="block font-medium">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="notifications-section mb-6">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <div className="flex items-center mb-4">
            <label className="flex-1 font-medium">Email Notifications</label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notifications.emailNotifications}
              onChange={handleNotificationToggle}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="flex-1 font-medium">SMS Notifications</label>
            <input
              type="checkbox"
              name="smsNotifications"
              checked={notifications.smsNotifications}
              onChange={handleNotificationToggle}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="flex-1 font-medium">Push Notifications</label>
            <input
              type="checkbox"
              name="pushNotifications"
              checked={notifications.pushNotifications}
              onChange={handleNotificationToggle}
              className="toggle-checkbox"
            />
          </div>
        </div>

        {/* Privacy Section */}
        <div className="privacy-section">
          <h3 className="text-lg font-semibold mb-2">Privacy</h3>
          <div className="flex items-center mb-4">
            <label className="flex-1 font-medium">Data Sharing</label>
            <input
              type="checkbox"
              name="dataSharing"
              checked={privacy.dataSharing}
              onChange={handlePrivacyToggle}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="flex-1 font-medium">Ad Personalization</label>
            <input
              type="checkbox"
              name="adPersonalization"
              checked={privacy.adPersonalization}
              onChange={handlePrivacyToggle}
              className="toggle-checkbox"
            />
          </div>
        </div>

        {/* Save Changes Button at the Bottom */}
        <div className="save-button-section mt-6">
          <button
            type="submit"
            className="bg-dark text-white py-2 px-4 rounded hover:bg-slate-800 w-40"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
