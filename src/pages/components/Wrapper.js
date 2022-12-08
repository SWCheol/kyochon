const Wrapper = ({ children }) => {
  // max-w-3xl : 768px
  return (
    <div className="max-w-sm w-full relative overflow-x-hidden">{children}</div>
  );
};

export default Wrapper;
