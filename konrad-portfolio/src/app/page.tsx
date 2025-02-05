

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <div id="content" className="z-10 h-full w-full flex justify-center items-center">
          <p className="text-2xl">Hello</p>
        </div>
        <div id="background-image" className="absolute z-0 h-full w-full top-0 bg-contain bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}
