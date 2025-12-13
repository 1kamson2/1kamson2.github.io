import Image from "next/image";

function Tile(name: string, info: string) {
  return (
    <div className="group flex flex-col justify-center items-center 
      w-50 h-50 bg-zinc-800 rounded-xl p-2 m-4 
      outline outline-offset-1 outline-zinc-700 transition duration-150 ease-in-out">
      <span className="block group-hover:hidden text-2xl">
        {name}
      </span>
      <span className="hidden group-hover:block">
        {info}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center align-center w-100% h-100%">
      <h1 className="text-5xl p-2 m-4"> Portfolio </h1>
      <span className="text-lg p-2 m-4">
        <p> Other projects can be seen on my <a className="text-blue-600 hover:text-blue-300" href="https://github.com/1kamson2?tab=repositories">Github profile</a>. </p>
        <p> Learn more about the project after clicking the tile. </p>
      </span>
      <div className="flex flex-wrap p-2 m-6">
        <a href="https://github.com/1kamson2/Neumann-SDNLP" target="_blank">
        {Tile("Ne", "A demo of small LLM service. I tried to recreate a model from the research papers.")}
        </a>
        <a href="https://github.com/1kamson2/vidrecs-ml" target="_blank">
        {Tile("Vrm", "A service that uses Machine Learning methods to suggest games to users.")}
        </a>
      </div>
    </div>
  );
}
