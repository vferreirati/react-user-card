import EventListing from './components/EventListing';
import UserListing from './components/UserListing';

const App = () => {
  return (
    <div className="h-screen bg-gray-50 p-6">
      <p className=" text-4xl mb-4">Hello world!</p>

      <UserListing />
      <EventListing />
    </div>
  );
};
export default App;
