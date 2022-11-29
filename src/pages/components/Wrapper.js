const Wrapper = ({ children }) => {
  // max-w-3xl : 768px
  return <div className="max-w-sm w-full relative">{children}</div>;
};

export default Wrapper;
