const Sidebar = (props) => {
  //   const sidebar = document.getElementById("sidebar");
  //   const contents = document.getElementById("contents");
  //   const shadow = document.getElementById("shadow");

  const state = props.active;
  console.log(state);

  return (
    <>
      <div id="sidebar" className="w-full h-screen absolute top-0 left-0 -z-10">
        <div
          id="contents"
          className="w-3/4 h-screen bg-white absolute top-0 transition-[left] duration-300 -left-full"
        ></div>
        <div
          id="shadow"
          className="w-full h-screen bg-black duration-300 transition-[opacity] opacity-0"
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
