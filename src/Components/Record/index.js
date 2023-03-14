function Record({ record }) {
  const { type, time, thumb } = record;
  return (
    <div
      className="relative h-56 w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${thumb})` }}
    >
      <div className="absolute bottom-0 left-0 bg-yellow text-light pl-2 pr-5 py-2 text-base font-inter">
        {time}.<span className="capitalize">{type}</span>
      </div>
    </div>
  );
}

export default Record;
