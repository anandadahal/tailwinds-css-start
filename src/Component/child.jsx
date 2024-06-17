import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
