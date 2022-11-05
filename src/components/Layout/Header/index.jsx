import React from "react";

function Header() {
  return (
    //
    <div className="h-[50px] bg-teal-300 flex flex-row justify-center items-center relative">
      <div className="inline-flex w-[40px] h-[40px] absolute left-3 rounded-md overflow-hidden bg-white py-2 px-1 flex-col justify-around">
        {Array.from(Array(3)).map((t) => (
          <div className="h-[3px] bg-teal-300"></div>
        ))}
      </div>
      {/* <div className="inline-block w-[40px] h-[40px]">Logo</div> */}
      <div className="inline-block text-white text-xl font-semibold">
        Mật Thư Online
      </div>
    </div>
  );
}

export default Header;
