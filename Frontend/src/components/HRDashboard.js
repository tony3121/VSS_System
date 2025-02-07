import React, { useState, useEffect } from "react";
import axios from "axios";

const HRDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://vss-backend.onrender.com/candidates")
      .then(response => {
        setCandidates(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching candidates", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
      {loading ? (
        <p>Loading candidates...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Experience</th>
              <th className="border px-4 py-2">Skills</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td className="border px-4 py-2">{candidate.full_name}</td>
                <td className="border px-4 py-2">{candidate.email}</td>
                <td className="border px-4 py-2">{candidate.years_of_experience} years</td>
                <td className="border px-4 py-2">{candidate.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HRDashboard;
