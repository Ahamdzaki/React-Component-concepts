import Pic1 from "../src/assets/1.jpg"
import Pic2 from "../src/assets/2.jpg"
import Pic3 from "../src/assets/3.jpg"
import Header from "./components/Header"
import Card from "./components/Card"
const data = [
  {
    image: Pic1,
    title:"Blue Card",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!"
  },
  {image: Pic2,
    title:"Red Card",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!"},
  {image: Pic3,
    title:"Black Card",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere!"}
]
export default function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />
      <div className=" flex items-center justify-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <Card image = {data[0].image} title={data[0].title} description = {data[0].descriptions} />
        <Card image = {data[1].image} title={data[1].title} description = {data[1].descriptions} />
        <Card image = {data[2].image} title={data[2].title} description = {data[2].descriptions} />
      </div>
      
    </div>
  )
}
