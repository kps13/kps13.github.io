import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div style={{ background: `url(./images/brands.png) `}} className="h-full w-full">
                <div className="w-full h-full bg-white bg-opacity-70 flex flex-col justify-end items-center">
                  <div className="h-full self-start mb-10 md:mb-20 py-3 md:py-6 bg-yellow-400 bg-opacity-80 w-full flex justify-center items-center">
                    <h1 className="text-2xl md:text-6xl text-bold text-gray-900">
                      ស្វាគមន៍មកកាន់ KPS Collection
                    </h1>
                  </div>
                  <div className="w-5/6 rounded-md mb-4 md:mb-10 px-3 md:px-6 py-6 bg-gray-900 bg-opacity-80 flex items-center justify-center">
                    <h1 className="text-lg md:text-3xl text-bold text-yellow-300">
                      ពួកយើងផ្តល់ជូននូវ សំលៀកបំពាក់ស្អាតៗ ទាន់សម័យ សំរាប់ បុរស នារី នឹង កុមារ
                    </h1>
                  </div>
                  <div className="w-full md:w-5/6 grid grid-cols-2 justify-items-center gap-2 place-content-start md:flex md:justify-between md:items-center bg-opacity-80 py-4 md:py-10 md:space-x-10">
                    <img data-aos="fade-right" data-aos-duration="2000" className="col-span-2 place-self-center h-20 md:h-40 bg-yellow-300 rounded-lg bg-opacity-80 p-2" src="./images/baby.svg" />
                    <img data-aos="fade-right" data-aos-duration="1500" className="h-20 md:h-40 bg-yellow-300 rounded-lg bg-opacity-80 p-2" src="./images/girl.svg" />
                    <img data-aos="fade-up" data-aos-duration="1000" className="h-20 md:h-40 bg-yellow-300 rounded-lg bg-opacity-80 p-2" src="./images/boy.svg" />
                    <img data-aos="fade-left" data-aos-duration="1500" className="h-20 md:h-40 bg-yellow-300 rounded-lg bg-opacity-80 p-2" src="./images/women.svg" />
                    <img data-aos="fade-left" data-aos-duration="2000" className="h-20 md:h-40 bg-yellow-300 rounded-lg bg-opacity-80 p-2" src="./images/men.svg" />
                  </div>
                  <div className="py-6 bg-yellow-400 bg-opacity-80 w-full flex justify-center items-start">
                    <h1 className="text-2xl md:text-6xl text-bold text-gray-900">
                      នឹងមកដល់ក្នុងពេលឆាប់ៗនេះ!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" style={{ backgroundSize: 'cover', background: "url(./images/kids.png) no-repeat center center"}}>
              <div className="mx-auto w-full h-screen bg-white bg-opacity-30 flex justify-center items-center">
                <div className="p-4 rounded-lg bg-gray-900 bg-opacity-60">
                  <h1 className="text-6xl font-bold text-yellow-400">កុមារ</h1>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="w-full h-full flex justify-center items-center">
                <img className="object-cover w-full h-screen absolute z-0" src="./images/women.png" />
                <div className="absolute mx-auto w-full h-screen bg-white bg-opacity-30 flex justify-center items-center">
                  <div className="p-4 rounded-lg bg-gray-900 bg-opacity-60">
                    <h1 className="text-6xl font-bold text-yellow-400">នារី</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="w-full h-full flex justify-center items-center">
                <img className="object-cover w-full h-screen absolute z-0" src="./images/men.jpg" />
                <div className="absolute mx-auto w-full h-screen bg-white bg-opacity-30 flex justify-center items-center">
                  <div className="p-4 rounded-lg bg-gray-900 bg-opacity-70">
                    <h1 className="text-6xl font-bold text-yellow-400">បរុស</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="w-full h-full flex justify-center items-center">
                <img className="object-cover w-full h-screen absolute z-0" src="./images/design.jpeg" />
                <div className="absolute mx-auto w-full h-screen bg-white bg-opacity-30 flex flex-col justify-center items-center">
                  <div className="h-1/2 w-full p-10 bg-gray-900 bg-opacity-60 flex flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">ទំនាក់ទំនង</h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">016 777 631</h1>
                  </div>
                  <div className="h-1/2 w-full p-10 bg-yellow-300 bg-opacity-80 flex flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Thank you !</h1>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}
