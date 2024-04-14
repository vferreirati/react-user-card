const UserCard = ({ name, role, imageUrl }) => {
  const letter = name.substring(0, 1);

  let avatar = (
    <div className="bg-orange-400 rounded-full flex items-center justify-center w-12 h-12">
      <h2 className="text-white text-2xl font-bold">{letter}</h2>
    </div>
  );
  if (imageUrl) {
    avatar = (
      <img
        className="w-16 h-16 rounded-full"
        src={imageUrl}
        alt="Profile image"
      />
    );
  }

  return (
    <div className="max-w-md bg-white mb-2 rounded-xl p-6 shadow-lg flex flex-row items-center border-gray-100 border">
      {avatar}

      <div className="ml-5">
        <h2 className="text-black font-bold mb-px-2">{name}</h2>
        <p className="text-slate-500 font-medium">{role}</p>
        <button className="rounded-full border-blue-600 transition ease-in hover:bg-blue-600 hover:text-white text-blue-600 mt-2 px-6 border shadow-sm p-2 text-sm font-bold">
          Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
