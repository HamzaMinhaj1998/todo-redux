import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTodoDeleted, setTodoDetails } from "../redux/slices/todo.slice"
import { RootState } from "../redux/store"


const Page = () => {
 const dispatch =  useDispatch()
  const { title } = useSelector((state: RootState) => state.todo)
  const [myvalue, setMyValue] = useState("")
 
 const addTitle = ()=>{
    dispatch(setTodoDetails(myvalue))
  setMyValue("")

 }

 const deletedTitle = (item:string) => {
  dispatch(setTodoDeleted(item))
}
const editButton = (item: string)=>{
   
}

  return (
    <>
      <div className="App bg-[rgba(0,0,0,0.4)] w-full h-screen flex flex-col justify-center ">
        <div className="header flex justify-center items-center w-full">
          <div className="flex flex-col">
          <input type="text" placeholder="Task..." value={myvalue} onChange={(e)=>{
            setMyValue(e.target.value)
          }} name='title' className="border-2 rounded-l-lg p-1" />
          </div>
          <button onClick={addTitle} className="bg-[lightGray] rounded-r-lg p-[6px]">Add Task</button>
        </div>

        <div className="todoList flex flex-col items-center my-4">
          <div className="w-64">
            {title.map((item,index)=>
              <li key={index}  className='flex justify-between mb-3'><span>{index + 1}: {item}</span> <div> <button className="bg-white rounded-md font-medium text-sm p-1 w-14" onClick={()=>{editButton(item)}} >Edit</button> <button onClick={()=>deletedTitle(item)} className="bg-white rounded-md text-sm p-1 w-14 font-medium">Delete</button> </div> </li>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
