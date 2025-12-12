import React from "react";

const ProfilePage = () => {
  const user = {
    Firstname: "John",
    LastName: "Smith",
    email: "johnsmith@example.com",
    phone: "+1 (123) 456-7890",
    location: "New York, USA",
    bio: "Experienced real estate agent with a passion for helping clients find their dream home. Over 10 years in the industry.",
    image:
      "https://i.pravatar.cc/150?img=3", // Placeholder profile picture
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <img
            src={user.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">{user.Firstname}</h1>
          <p className="text-indigo-600">{user.LastName}</p>
          <p className="mt-3 text-gray-600">{user.bio}</p>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-medium">Email:</span> {user.email}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {user.phone}
            </div>
            <div>
              <span className="font-medium">Location:</span> {user.location}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
