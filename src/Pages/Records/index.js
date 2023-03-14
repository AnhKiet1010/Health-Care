import React, { useRef, useState } from "react";

import MainLayout from "@/Containers/MainLayout";
import Chart from "@/Components/Chart";
import { diaries as mockDiaries, exercises, chartData } from "@/data";
import Diary from "@/Components/Diary";

function Records() {
  const [diaries, setDiaries] = useState(mockDiaries);
  const bodyRef = useRef(null);
  const exerciseRef = useRef(null);
  const diaryRef = useRef(null);

  const handleShowMoreDiary = () => {
    setDiaries([...diaries, ...mockDiaries]);
  };

  const scrollToBody = () => bodyRef.current.scrollIntoView();
  const scrollToExercise = () => exerciseRef.current.scrollIntoView();
  const scrollToDiary = () => diaryRef.current.scrollIntoView();

  return (
    <MainLayout>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="mt-14 flex justify-around gap-12">
            <button className="bg-yellow p-6 w-72 h-72" onClick={scrollToBody}>
              <div
                className="w-full h-full bg-blend-luminosity"
                style={{
                  background:
                    "url(/images/MyRecommend-1.jpg) no-repeat left center / cover, #000000",
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray-mirror">
                  <p className="text-yellow text-xxl font-inter">BODY RECORD</p>
                  <p className="text-light bg-orange text-sm px-5 py-0.5 mt-2">
                    自分のカラダの記録
                  </p>
                </div>
              </div>
            </button>
            <button
              className="bg-yellow p-6 w-72 h-72"
              onClick={scrollToExercise}
            >
              <div
                className="w-full h-full bg-blend-luminosity"
                style={{
                  background:
                    "url(/images/MyRecommend-2.jpg) no-repeat left center / cover, #000000",
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray-mirror">
                  <p className="text-yellow text-xxl font-inter">MY EXERCISE</p>
                  <p className="text-light bg-orange text-sm px-5 py-0.5 mt-2">
                    自分の運動の記録
                  </p>
                </div>
              </div>
            </button>
            <button className="bg-yellow p-6 w-72 h-72" onClick={scrollToDiary}>
              <div
                className="w-full h-full bg-blend-luminosity"
                style={{
                  background:
                    "url(/images/MyRecommend-3.jpg) no-repeat center center / cover, #000000",
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray-mirror">
                  <p className="text-yellow text-xxl font-inter">MY DIARY</p>
                  <p className="text-light bg-orange text-sm px-5 py-0.5 mt-2">
                    自分の日記
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="pt-14 pb-7" ref={bodyRef}>
            <div className="w-full px-6 py-4 bg-gray-dark">
              <div className="flex items-center">
                <p className="text-light w-24 text-base font-inter">
                  BODY<br></br> RECORD
                </p>
                <p className="text-light text-xxl">2021.05.21</p>
              </div>
              <Chart legendPosition={null} title="" data={chartData} />
              <div className="flex items-center gap-4 mt-2">
                <button className="bg-light text-yellow px-6 rounded-xl text-base">
                  日
                </button>
                <button className="bg-light text-yellow px-6 rounded-xl text-base">
                  週
                </button>
                <button className="bg-light text-yellow px-6 rounded-xl text-base">
                  月
                </button>
                <button className="bg-yellow text-light px-6 rounded-xl text-base">
                  年
                </button>
              </div>
            </div>
          </div>
          <div className="py-7" ref={exerciseRef}>
            <div className="w-full px-6 py-4 bg-gray-dark">
              <div className="flex items-center">
                <p className="text-light w-24 text-base">
                  MY<br></br> EXERCISE
                </p>
                <p className="text-light text-xxl">2021.05.21</p>
              </div>
              <div className="w-full grid grid-cols-2 max-h-48 overflow-auto scrollbar pr-8 gap-y-2 gap-x-10 mt-1">
                {exercises.map((exercise, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-start border-gray-light border-b text-light"
                    >
                      <div className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-light m-3"></div>
                        <div className="flex flex-col text-base">
                          {exercise.text}
                          <span className="font-inter text-yellow">
                            {exercise.cal} kcal
                          </span>
                        </div>
                      </div>
                      <div className="text-yellow text-lg">
                        {exercise.time} min
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-7" ref={diaryRef}>
            <div className="w-full">
              <p className="text-gray text-xl font-inter">MY DIARY</p>
              <div className="w-full grid grid-cols-4 gap-2">
                {diaries.map((diary, index) => (
                  <Diary key={index} diary={diary} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-7 mb-16">
            <button
              className="bg-orange-gradient text-light py-3 px-20 rounded-md text-lg"
              onClick={handleShowMoreDiary}
            >
              自分の日記をもっと見る
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Records;
