const Emoji = ({ name }: { name: string }) => {
  return (
    <span
      style={{ backgroundImage: `url('/3d-icons/${name}.png')` }}
      className="bg-center bg-cover   w-15 h-15 translate-y-2 scale-x--100 select-none"
    />
  );
};

export default Emoji;
