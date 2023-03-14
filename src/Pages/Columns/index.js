import React, { useState } from "react";

import MainLayout from "@/Containers/MainLayout";
import { columns as mockColumns } from "@/data";
import Column from "../../Components/Column";

function Columns() {
  const [columns, setColumns] = useState(mockColumns);

  const handleShowMoreColumns = () => {
    setColumns([...columns, ...mockColumns]);
  };

  return (
    <MainLayout>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="py-14 flex justify-around gap-8">
            <button className="bg-gray w-full h-36">
              <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-gray-mirror">
                <p className="text-yellow text-xxl font-inter font-normal">
                  RECOMMENDED <br></br>COLUMN
                </p>
                <div className="w-14 border border-light"></div>
                <p className="text-light text-lg">オススメ</p>
              </div>
            </button>
            <button className="bg-gray w-full h-36">
              <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-gray-mirror">
                <p className="text-yellow text-xxl font-inter font-normal">
                  RECOMMENDED <br></br>DIET
                </p>
                <div className="w-14 border border-light"></div>
                <p className="text-light text-lg">オススメ</p>
              </div>
            </button>
            <button className="bg-gray w-full h-36">
              <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-gray-mirror">
                <p className="text-yellow text-xxl font-inter font-normal">
                  RECOMMENDED <br></br>BEAUTY
                </p>
                <div className="w-14 border border-light"></div>
                <p className="text-light text-lg">オススメ</p>
              </div>
            </button>
            <button className="bg-gray w-full h-36">
              <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-gray-mirror">
                <p className="text-yellow text-xxl font-inter font-normal">
                  RECOMMENDED <br></br>HEALTH
                </p>
                <div className="w-14 border border-light"></div>
                <p className="text-light text-lg">オススメ</p>
              </div>
            </button>
          </div>
          <div className="w-full">
            <div className="w-full grid grid-cols-4 gap-2">
              {columns.map((column, index) => (
                <Column key={index} column={column} />
              ))}
            </div>
          </div>
          <div className="text-center mt-7 mb-16">
            <button
              className="bg-orange-gradient text-light py-3 px-20 rounded-md text-lg"
              onClick={handleShowMoreColumns}
            >
              コラムをもっと見る
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Columns;
