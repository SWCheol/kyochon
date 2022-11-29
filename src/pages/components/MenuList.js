const MenuList = (props) => {
  return (
    <>
      <div className="px-4 py-6 ml-auto mr-auto mb-4 border-b border-solid border-gray-200 text-left flex justify-between items-center">
        <img className="basis-2/6 h-28" src={props.src} alt={props.name} />
        <div className="basis-3/6 text-xl leading-10">
          <div>{props.name}</div>
          <div>{props.price}</div>
        </div>
        <span class="basis-1/6 material-symbols-outlined text-3xl">
          add_shopping_cart
        </span>
      </div>
    </>
  );
};

export default MenuList;
