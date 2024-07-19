import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  let { pathname } = useLocation();
  return (
    <div>
      
      <nav className="fixed z-10 flex pl-[20px] py-[20px] w-[100%] rounded-md shadow-xl shadow-slate-400 bg-[#f8f8f8a7] ">
        <div className="">
          <ul className="flex gap-10 font-medium">
            <Link to="/">
              <li style={{ color: pathname == "/" ? "blue" : "black" }}>
                About Us
              </li>
            </Link>
            <Link to="/courses">
              <li style={{ color: pathname == "/courses" ? "blue" : "black" }}>
                Courses
              </li>
            </Link>
            <Link to="/contact">
              <li style={{ color: pathname == "/contact" ? "blue" : "black" }}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer className=" pl-[20px] py-[20px] w-[100%] rounded-md bg-[#6a6a6a99] mt-[100px]">
        <h1 className="text-[40px] font-bold px-[40px] py-[20px]">Let’s Chat! Let’s Build Something<br/>
          Awesome Together</h1>
        <h2 className="footer-text w-[270px] mx-[40px]">LETS START PROJECT</h2>

        <div className="text-gray-800 text-[16px] flex gap-2 flex-col text-end w-[86%]">
          <p className="mr-[75px]">Tel: +992 915 25 6666</p>
          <p className="mr-[75px]">Tel: +992 034 34 6666</p>
          <a href="https://mail.google.com/mail/u/0/#inbox">Email: TohiraFurmol@gmail.com</a>
        </div>

        <div className="flex justify-between px-[40px] items-center text-gray-600">
          <div>
            <p>Simplifying digitalization of businesses.</p>
          </div>
          
          <div className="flex pr-[80px] gap-3 mt-[10px]">
            <a href="quantumcode_00">
              <div className="instagram p-[13px] rounded-[50%]"><img src="src/img/Instagram.png" alt="" /></div>
            </a>
              <div className="telegram p-[13px] rounded-[50%]"><img src="src/img/telegram.png" alt="" /></div>
          </div>
        
        
        </div>
      </footer>
    </div>
  );
};

export default Layout;
