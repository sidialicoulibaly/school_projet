"use client";
import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

const parentPage = () => {
  return (
    <div className=" flex-1 p-4 flex flex-col gap-4 lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="h-full bg-white p-4 rounded-md shadow-md">
          <h1 className="text-xl font-semibold mb-4">Schedule (John Doe)</h1>
          <BigCalender />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <Announcements />
      </div>
    </div>
  );
};

export default parentPage;
