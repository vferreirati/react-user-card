const EventCard = ({ imageUrl, name }) => {
  return (
    <div className="rounded-xl w-min pb-2 bg-white hover:shadow-lg hover:-translate-y-1 transition">
      <img
        src={imageUrl}
        alt="Event banner"
        className="rounded-t-xl max-w-fit h-48 bg-contain bg-center"
      />
      <div className="mx-2">
        <h1 className=" mt-2 w-auto text-xl text-gray-900">{name}</h1>

        <p className="text-slate-700  mt-2 text-sm">Vitória, KAEN</p>

        <div className="flex justify-end">
          <div className="bg-gray-200 flex justify-center items-center w-6 h-6 mb-2 mt-2 rounded-full">
            <p className="text-red-500 text-sm">♡</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
