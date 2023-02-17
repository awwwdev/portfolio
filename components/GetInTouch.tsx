const GetInTouch = () => {
  return (
    <>
      <div className=" max-w-page mx-auto sm:px-8 px-4  ">
        <h2 className="H1  5">Let&apos;s get in touch</h2>

        <div className="flex gap-2 ">
          <a href="mailto:hamidpm@pm.me" className="btn-prm !mt-20  py-2 rd-3 ">
            {/* <img src="/3d-icons/envelop.png" alt="Envelop" className="w-10 flex ac jc scale-150 rotate-20 " /> */}
            <span className="px-8 py-2 text-xl fw-900  bf-i-ph-envelope-simple-bold">Email Me</span>
          </a>
          {/* <img
            src="/3d-icons/pointing-hand.png"
            alt="Envelop"
            className="w-10 min-w-10 flex gap-2 ac jc "
            style={{ transform: "scale(1 , 1 )" }}
          /> */}
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
