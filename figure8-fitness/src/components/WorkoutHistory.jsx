import React from 'react';

const dummy = [
  { id: 1, date: '2025-09-01', name: 'Full Body', duration: 45, calories: 380 },
  { id: 2, date: '2025-09-03', name: 'Upper Body', duration: 40, calories: 320 },
  { id: 3, date: '2025-09-04', name: 'HIIT', duration: 30, calories: 420 },
  { id: 4, date: '2025-09-06', name: 'Leg Day', duration: 50, calories: 500 },
  { id: 5, date: '2025-09-07', name: 'Core & Mobility', duration: 35, calories: 260 },
];

const WorkoutHistory = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Workouts</h3>
      <ul className="divide-y divide-gray-100">
        {dummy.map((w) => (
          <li key={w.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900">{w.name}</div>
              <div className="text-xs text-gray-500">
                {new Date(w.date).toLocaleDateString()} • {w.duration} mins
              </div>
            </div>
            <div className="text-sm font-bold text-gray-800">{w.calories} kcal</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;