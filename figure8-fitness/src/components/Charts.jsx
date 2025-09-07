import React from 'react';

const Charts = () => {
  const calories = [320, 480, 410, 560, 680, 530, 610];
  const workouts = [1, 0, 2, 1, 1, 2, 0];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const maxCal = Math.max(...calories, 1);
  const sparkWidth = 300;
  const sparkHeight = 80;
  const stepX = sparkWidth / (calories.length - 1 || 1);
  const points = calories
    .map((c, i) => {
      const x = i * stepX;
      const y = sparkHeight - (c / maxCal) * sparkHeight;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Activity Overview</h3>
          <span className="text-sm text-gray-500">Weekly Calories</span>
        </div>
        <div className="w-full overflow-x-auto">
          <svg width={sparkWidth} height={sparkHeight} className="block">
            <polyline fill="none" stroke="#50a963" strokeWidth="3" points={points} />
          </svg>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          {days.map((d) => (<span key={d}>{d}</span>))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Workouts per Day</h3>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {workouts.map((w, i) => {
            const h = (w / Math.max(...workouts, 1)) * 140;
            return (
              <div key={i} className="flex flex-col items-center justify-end">
                <div className="w-6 rounded-t bg-orange-500" style={{ height: `${Math.max(h, 6)}px` }} title={`${days[i]}: ${w} workout${w !== 1 ? 's' : ''}`} />
                <span className="mt-2 text-xs text-gray-500">{days[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Charts;