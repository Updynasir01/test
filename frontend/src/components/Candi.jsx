import React from 'react';

const CandidatePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Online Voting System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/candidates" className="hover:underline">Candidates</a></li>
              <li><a href="/results" className="hover:underline">Results</a></li>
              <li><a href="/logout" className="hover:underline">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Candidate Info */}
          <div className="flex items-center space-x-6">
            <img 
              src="candidate-photo.jpg" 
              alt="Candidate" 
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600">Presidential Candidate</p>
              <p className="text-gray-600">Independent</p>
            </div>
          </div>

          {/* Manifesto */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Manifesto</h3>
            <p className="text-gray-700 mt-2">
              "My vision is to improve education, healthcare, and infrastructure 
              for all citizens. I aim to promote equality and justice while 
              ensuring economic growth."
            </p>
          </div>

          {/* Vote Button */}
          <div className="mt-6 text-center">
            <button 
              className="bg-green-600 text-white py-2 px-4 rounded-md 
              hover:bg-green-700 focus:outline-none"
            >
              Vote Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Online Voting System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CandidatePage;
