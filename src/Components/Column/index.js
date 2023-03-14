function Column({ column }) {
  return (
    <div className="">
      <div className="relative">
        <img src={column.thumb} alt="" className="h-36" />
        <div className="absolute bottom-0 w-fit bg-yellow text-light font-inter text-base px-2">
          {column.date} {column.time}
        </div>
      </div>
      <p className="text-base my-2">{column.desc}</p>
      <div className="flex text-orange text-xs gap-2">
        {column.tags.map((tag) => (
          <p>#{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Column;
