import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[80vh]">
      <div className="relative w-full h-full flex items-center justify-center">
        <div id="content" className="z-10 h-full w-full flex justify-center items-center">
          <div>
            <div className="mb-8">
              <div>
                <p className="text-4xl mb-1">Konrad Dissake</p>
              </div>
              <div>
                <p className="text-lg text-center">Fullstack Developer</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="h-10 w-24 flex justify-center items-center glass rounded-sm">
                <Link className="" href='/about'>About</Link>
              </div>
              <div id="home-works-button" className="h-10 w-24 flex justify-center items-center rounded-sm">
                <Link className="" href='/works'>Works</Link>
              </div>
            </div>
          </div>
        </div>
        <div id="background-image" className="absolute z-0 h-full w-full top-0 bg-contain bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}
