function App() {
  return (
    <section className="flex  justify-center items-center container h-[100vh] ">
      <div className="flex">
        <div className="bg-[#292660] p-5 pr-10 rounded-l-xl">
          <h4 className="text-[#686084] text-[15px] font-medium">Course</h4>
          <h2 className="text-2xl font-semibold">
            JavaScript <br /> Fundamentals
          </h2>
          <p className="text-[#686084] font-medium text-sm mt-6">
            view All Chapter
            <span className="font-bold text-[#736b92]">{`>`}</span>
          </p>
        </div>
        <div className="bg-white p-5 rounded-r-xl">
          <div className="flex  justify-between gap-20">
            <div>
              <h4 className="text-[#686084] text-[15px] font-medium uppercase">
                chapter 4
              </h4>
            </div>
            <div>
              <progress
                className="progress w-40 progress-primary"
                value={(6 / 9) * 100}
                max="100"
              ></progress>
              <p className="text-[#686084] text-sm text-end">6/9 Challenges</p>
            </div>
          </div>
          <div>
              <h2 className="text-2xl font-semibold text-black">
               Callbacks & Closures
              </h2>
          </div>
          <div className="flex justify-end mt-6">
            <button className=" px-3 py-1 rounded-full bg-[#292660] text-white shadow-md shadow-[#737373]">Continue</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
