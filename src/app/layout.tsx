import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen overflow-x-hidden bg-[#481E14]">
      {/* NavBar */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
};

