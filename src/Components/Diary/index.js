function Diary({ diary }) {
  return (
    <div className="border-2 border-gray-b p-4 text-gray">
      <div className="text-lg">
        <div>{diary.date}</div>
        <div>{diary.time}</div>
      </div>
      <div className="mt-2 text-xs">
        {diary.title}
        <br></br>
        {diary.text}
      </div>
    </div>
  );
}

export default Diary;
