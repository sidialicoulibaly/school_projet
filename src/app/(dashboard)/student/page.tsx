"use client";
import Announcements from '@/components/Announcements';
import BigCalender from '@/components/BigCalender';
import EventCalender from '@/components/EventCalender';
import React from 'react';

const Student = () => {
  return (
    <div className="p-4 flex flex-col gap-4 lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="h-full bg-white p-4 rounded-md shadow-md">
          <h1 className="text-xl font-semibold mb-4">Schedule (4A)</h1>
          <BigCalender />
        </div>
      </div>
      
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default Student;
