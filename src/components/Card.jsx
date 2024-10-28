import Button from "./Button"
export default function Card(props) {
  return (
        <div className="bg-zinc-900 rounded-xl p-2 m-4">
            <div className="flex flex-col space-y-3 text-white">
                <img src={props.image} alt="" className=" w-80 rounded-xl hover:scale-105 duration-200" />
                <h2 className="text-center text-xl">{props.title}</h2>
                <p className="max-w-xs text-center mx-auto">{props.description}</p>
                <Button />
            </div>
    </div>
  )
}
