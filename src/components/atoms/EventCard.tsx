import React from 'react';

interface EventCardProps { title: string; date: string; }

export const EventCard: React.FC<EventCardProps> = ({ title, date }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="flex items-center text-slate-500 font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{date}</span>
      </div>
    </div>
    <button className="mt-4 w-full py-2 text-slate-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
      查看詳情
    </button>
  </div>
);

export default EventCard;
