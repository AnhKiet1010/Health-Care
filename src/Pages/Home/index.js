import React, { useState } from "react";

import { DinnerIcon, LunchIcon, MorningIcon, SnackIcon } from "@/assets/icons";
import Chart from "@/Components/Chart";
import Record from "@/Components/Record";
import MainLayout from "@/Containers/MainLayout";
import { records as mockRecords, chartData } from "@/data";

const defaultRecordTypes = mockRecords.reduce((accumulator, current) => {
  if (!accumulator.includes(current.type)) {
    accumulator.push(current.type);
  }
  return accumulator;
}, []);

function Home() {
  const [recordTypes, setRecordTypes] = useState(defaultRecordTypes);
  const [records, setRecords] = useState(mockRecords);

  const handleShowMoreRecord = () => setRecords([...records, ...mockRecords]);

  const handleRecordChange = (type) => {
    setRecordTypes([type]);
  };

  return (
    <MainLayout>
      <div className="w-full">
        <div className="grid grid-cols-8">
          <div
            className="relative col-span-3 w-full h-full flex justify-center items-center bg-blend-hard-light"
            style={{
              background: `url(/images/d01.jpg) no-repeat center center / cover, linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%)`,
            }}
          >
            <img src="/images/d01_mask.png" alt="" />
          </div>
          <div className="col-span-5 pl-14 pr-40  py-4 bg-gray-dark">
            <Chart legendPosition={null} title="" data={chartData} />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="py-6 flex justify-around">
            <MorningIcon
              className="hover:opacity-75 cursor-pointer"
              onClick={() => handleRecordChange("morning")}
            />
            <LunchIcon
              className="hover:opacity-75 cursor-pointer"
              onClick={() => handleRecordChange("lunch")}
            />
            <DinnerIcon
              className="hover:opacity-75 cursor-pointer"
              onClick={() => handleRecordChange("dinner")}
            />
            <SnackIcon
              className="hover:opacity-75 cursor-pointer"
              onClick={() => handleRecordChange("snack")}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {records
              .filter((record) => recordTypes.includes(record.type))
              .map((record, index) => (
                <Record record={record} key={index} />
              ))}
          </div>
          <div className="text-center mt-7 mb-16">
            <button
              className="bg-orange-gradient text-light py-3 px-20 rounded-md text-lg"
              onClick={handleShowMoreRecord}
            >
              記録をもっと見る
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
