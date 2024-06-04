import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;