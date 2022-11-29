const Sidebar = (props) => {
  const sidebar = document.getElementById("sidebar");
  const contents = document.getElementById("contents");
  const shadow = document.getElementById("shadow");

  const state = props.active;

  const active = () => {
    sidebar.classList.toggle("z-10");
    contents.classList.toggle("left-full");
    shadow.classList.toggle("opacity-60");
  };

  window.addEventListener("click", () => {
    if (state === "active") {
      console.log(state);
      active();
    }
  });

  return (
    <>
      <div
        id="sidebar"
        className="max-w-sm w-full h-screen absolute top-0 left-0 -z-10"
      >
        <div
          id="contents"
          className="w-3/4 h-screen bg-white absolute top-0 transition-[left] duration-300 -left-full"
        >
          <div id="top">
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">
              notifications_active
            </span>
          </div>
        </div>
        <div
          id="shadow"
          onClick={active}
          className="w-full h-screen bg-black duration-300 transition-[opacity] opacity-0"
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
