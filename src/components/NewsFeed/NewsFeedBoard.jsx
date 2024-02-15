import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";

const NewsFeedBoard = () => {
  return (
    <main className='my-10 lg:my-14'>
      <div className='container mx-auto grid grid-cols-12 gap-8'>
        {/* <!-- left --> */}
        <LeftSideNews />
        {/* <!-- right --> */}
        <RightSideNews />
      </div>
    </main>
  );
};

export default NewsFeedBoard;
