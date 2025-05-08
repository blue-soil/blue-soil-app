import { ReactNode } from "react";
import TopNav from "./navigation";
import Footer from "./navigation/footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-col">
      <TopNav />
      {children}
      <Footer/>
    </div>
  );
};

export default AppLayout;
