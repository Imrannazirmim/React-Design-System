const Sidebar = () => {
  return (
    <aside className="w-28 h-screen bg-teal-600 p-2">
      <div>
        <span>Dashboard</span>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Profile">Profile</a>
          </li>
          <li>
            <a href="#Setting">Settings</a>
          </li>
          <li>
            <a href="#Account">Account</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
