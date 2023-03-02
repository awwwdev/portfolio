const Intro = () => {
  return (
    <>
      <div className="mt-50">
        <h1 className="">
          <div className="flex gap-1 items-baseline">
            <span className="H1 fw-900">Hello! </span>
            <img src="/3d-icons/waving-hand.png" alt="waving-hand" className=" w-15" aria-hidden="true" />
          </div>
          <span className="block mt-10 max-w-100  ls-tighter font-family-inter c-gray11">I am Hamid.</span>
        </h1>
        <p className=" max-w-100 ls-tighter c-gray11">I create beautiful web apps.</p>
      </div>
    </>
  );
};

export default Intro;
