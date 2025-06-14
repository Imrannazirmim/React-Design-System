const Header = () => {
  return (
    <header className="w-screen h-[10vh] bg-teal-600 ">
      <nav className="flex justify-between items-center p-2 m-2">
        <h2>Software System</h2>
        <div className="flex gap-3">
          <button className="py-1 px-6 rounded bg-gray-500">Profile</button>
          <button className="py-1 px-6 rounded bg-gray-500">Logout</button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
