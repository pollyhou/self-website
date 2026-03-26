import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const navItems = [
    { path: "/", label: "首页" },
    { path: "/experience", label: "工作经历" },
    { path: "/projects", label: "项目作品" },
    { path: "/contact", label: "关于我" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#f0f0f0]">
        <div className="max-w-[1000px] mx-auto px-[5%] py-4">
          <nav className="flex items-center gap-6">
          <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-sm rounded transition-all ${
                      isActive
                        ? "text-[#1976d2] bg-[#f5f5f5]"
                        : "text-[#616161] hover:text-[#212121] hover:bg-[#f5f5f5]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-[5%] py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
