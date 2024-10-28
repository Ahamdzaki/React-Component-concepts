import HeaderImage from "../assets/key-concepts.png"
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center text-white space-y-3">
        <img src={HeaderImage} alt="" className="h-36 md:h-48" />
        <h2 className=" font-serif tracking-widest font-bold text-xl md:text-3xl">Keep Going </h2>
        <p className=" max-w-sm md:max-w-xl tracking-wide ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi dolore praesentium sit natus odit minima maxime deserunt hic ex!</p>
    </div>
  )
}
