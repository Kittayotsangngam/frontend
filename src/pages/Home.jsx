import React from "react";

const Home = () => {
  return (
    <div className="bg-[#F8F8FA]  h-screen w-screen ">
      <div className="w-full h-full flex justify-between items-center border-black-solid pt-16">
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <div className="mb-3.5">
                <div className="text-7xl font-bold ">Winner is always </div>
                <div className="text-7xl font-bold text-[#68CA45] ">
                  HUNGRIER!!!
                </div>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold ">
                  หิวข้าวแต่โรงอาหารคนเยอะหรอ ?<br></br>
                  ฝากหิ้วผ่าน
                  <span className="text-red-500 text-3xl">Hiwkao</span> สิ
                </div>
              </div>
              <div className="flex justify-start gap-5">
                <button
                  className={`bg-[#FFFFFF] rounded-3xl font-[Poppins] py-2 px-6  duration-500 text-black border-2 border-black-500 hover:shadow-md `}
                >
                  รับหิ้ว
                </button>
                <button
                  className={`bg-[#68CA45] rounded-3xl font-[Poppins] py-2 px-6  duration-500 text-black border-2 border-black-500 hover:shadow-md `}
                >
                  ฝากหิ้ว
                </button>
              </div>
            </div>
          </div>


        <div className="w-full h-full">
          <img
            className=""
            src="https://www.i-pic.info/i/LMGZ427835.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
