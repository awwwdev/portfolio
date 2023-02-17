const About = () => {
  return (
    <>
      <div className="flex gap-1 items-baseline mb-20">
        <h2 className="H1">About Me</h2>
        <img src="/3d-icons/dino.png" alt="dinosaur" className="w-15 translate-y-2" />
      </div>
      <div className=" space-y-4">
        <p className="">
          <strong className="fw-700">I am Web Developer and a Designer.</strong>
        </p>
        <p>
          I am obsessed with Design System and bridging the gap between Design and Development. I am planning
          out to build a customizable and accessible Design System with modern CSS technologies.
        </p>
        <p>
          I do Backend and Database stuff time to time for my freelance gigs and side projects. In the teams however, I
          am mostly left with all the Design and Frontend tasks. Everyone happier this way!
        </p>
        <p>
          Beside work, I love Art and Music. In fact, I wanted to be an artist not a while back. But I&apos;ve been busy
          learning web development stuff. In the future I want to work on things that combine Art and Web Technologies
          together!
        </p>
      </div>
    </>
  );
};

export default About;
