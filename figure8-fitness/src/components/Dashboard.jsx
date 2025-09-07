import React from 'react';
import StatsCard from './StatsCard';
import Charts from './Charts';
import WorkoutHistory from './WorkoutHistory';

const Dashboard = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Progress Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Track your activity, workouts, and weekly goals.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Calories Burned"
          value="2,180"
          subtitle="This week"
          icon={FiFire}
          accent="bg-red-500"
        />
        <StatsCard
          title="Workouts Completed"
          value="7"
          subtitle="Last 7 days"
          icon={FiActivity}
          accent="bg-orange-500"
        />
        <StatsCard
          title="Weekly Goal"
          value="5 / 6"
          subtitle="Sessions"
          icon={FiTarget}
          accent="bg-green-500"
        />
      </div>

      {/* Charts */}
      <Charts />

      {/* History + Banner */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        {/* Workout History */}
        <div className="xl:col-span-2">
          <WorkoutHistory />
        </div>

        {/* Motivational Banner */}
        <div className="bg-gradient-to-br from-green-500 to-orange-500 rounded-xl shadow text-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-extrabold">Stay Consistent</h2>
            <p className="text-white/90 mt-1">
              Small progress each day adds up to big results. You've got this!
            </p>
          </div>
          <img
            alt="Fitness motivation"
            className="mt-4 rounded-lg shadow-lg w-full object-cover h-36"
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Removed: import { FiFire, FiTarget, FiActivity } from 'react-icons/fi';
// Lightweight icon components (emoji-based) to avoid external deps
const FiFire = ({ size = 22 }) => <span style={{ fontSize: size }}>🔥</span>;
const FiActivity = ({ size = 22 }) => <span style={{ fontSize: size }}>🏃‍♂️</span>;
const FiTarget = ({ size = 22 }) => <span style={{ fontSize: size }}>🎯</span>;
