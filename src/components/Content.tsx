const Content = () => {
  return (
    <section className="flex p-2 m-4 items-center flex-col mx-auto w-screen">
      <h2>Welcome to the Dashboard.</h2>
      <p>Dashboard banking system and Transfer money</p>
      <div className="flex gap-2 justify-around  p-5 shadow rounded w-[50vw] m-2">
        <div className="bg-gray-300 py-2 px-10 rounded">
          <p>Total Users</p>
          <span>1,5000</span>
        </div>
        <div className="bg-gray-300 py-2 px-10 rounded">
          <p>Revenue</p>
          <span>5,5000</span>
        </div>
      </div>
    </section>
  );
};
export default Content;
