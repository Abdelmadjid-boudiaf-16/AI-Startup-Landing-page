const MagicButton = ({ text }: { text: string }) => {
  return (
    <button className="relative rounded-lg bg-gradient-to-b from-[#190D2E] to-[#4A208A] px-3 py-2 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="shadow-[0_0_10px_rgb(140, 69, 255, .7)_inset] absolute inset-0 rounded-lg border border-white/20" />
      </div>
      {text}
    </button>
  );
};

export default MagicButton;
