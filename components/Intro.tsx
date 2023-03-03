import Emoji from "@/components/Emoji";

const Intro = () => {
  return (
    <>
      <div className="mt-50">
        <h1 className="">
          <div className="flex gap-1 items-baseline">
            <span className="H1 fw-900">Hello! </span>
            <Emoji name="waving-hand" />
          </div>
          <span className="block mt-10 max-w-100  ls-tighter font-family-inter c-gray11">I am Hamid.</span>
        </h1>
        <p className=" max-w-100 ls-tighter c-gray11">I create beautiful web apps.</p>
      </div>
    </>
  );
};

export default Intro;
