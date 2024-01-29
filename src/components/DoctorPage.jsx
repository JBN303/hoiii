// DoctorUserPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorPage = ({ userId }) => {
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    // Fetch doctor details based on userId
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5007/api/doctors/${userId}`);
        setDoctorDetails(response.data);
      } catch (error) {
        console.error('Error fetching doctor details', error);
      }
    };

    fetchDoctorDetails();
  }, [userId]);

  if (!doctorDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display doctor details */}
      <h1>{doctorDetails.name}</h1>
      {/* Add more details as needed */}
    </div>
  );
};

export default DoctorPage;
