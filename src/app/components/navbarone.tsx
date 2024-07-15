import Image from "next/image";
import Link from "next/link";
const Navbarone = () => {
  const items = [
    {
      name: "Categories",
      src: "",
    },
    {
      name: "Services",
      src: "",

    },
    {
      name: "Industries",
      src: "",
    },
    {
      name: "Become A Supplier",
      src: "",
    },
    {
      name: "Help Center",
      src: "",
    },
  ];
  return (
    <div className="flex justify-center items-center pl-10 pr-10 gap-12 ">
      <div className="flex justify-center items-center gap-3">
        <Image
          width={30}
          height={30}
          className="h-[3rem] w-[3rem]  object-cover"
          loading="lazy"
          alt=""
          src="/group-6-962.png"
        />
        <h1 className="  text-inherit font-bold font-inherit  whitespace-nowrap text-[30px]">
          <span className="text-button-blue">Prism</span>
          <span className="text-salmon-100">Shop</span>
        </h1>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center  cursor-pointer">
          <Link
            href={item.src}
            className="text-button-blue no-underline text-[15px]"
          >
            {item.name}
          </Link>
      
        </div>
      ))}
      <div className="flex gap-4 items-center justify-center">
      <button className="w-[100px] h-[40px] rounded-md border border-button-blue  bg-white">
            <Link href="" className="no-underline text-button-blue  text-[15px]">
                Login
            </Link>
        </button>
        <button className="w-[100px] h-[40px] rounded-md border border-button-blue text-white bg-button-blue">
            <Link href="" className="no-underline text-white text-[15px] ">
                Register
            </Link>
        </button>
      </div>
        </div>

  );
};

export default Navbarone;
