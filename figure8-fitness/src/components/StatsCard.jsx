import React from 'react';

const StatsCard = ({ title, value, subtitle, icon: Icon, accent = 'bg-green-500' }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${accent}`}>
        {Icon ? <Icon size={22} /> : <span className="text-lg">★</span>}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-extrabold text-gray-900 leading-tight">{value}</div>
        <div className="text-xs text-gray-400 mt-0.5">{subtitle}</div>
      </div>
    </div>
  );
};

export default StatsCard;