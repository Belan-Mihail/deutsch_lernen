import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="m-16 items-center flex flex-col gap-8">
      <h2 className=" font-bold text-2xl">What you would like to do now???</h2>
      <Link
        to="create_question"
        className=" font-semibold text-2xl border-solid border-2 border-orange-500 p-8 rounded-xl hover:bg-orange-500 hover:text-white  "
      >
        Create Question
      </Link>
      <Link
        to="test_german"
        className=" font-semibold text-2xl border-solid border-2 border-green-500 p-8 rounded-xl hover:bg-green-500 hover:text-white"
      >
        German-Rus Test
      </Link>
      <Link
        to="test_rus"
        className=" font-semibold text-2xl border-solid border-2 border-red-500 p-8 rounded-xl hover:bg-red-500 hover:text-white"
      >
        Rus-German Test
      </Link>
    </div>
  );
};

export default HomePage;
