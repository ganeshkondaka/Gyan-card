import axios from "axios"

interface Todo{
    id: string,
    todo: string,
    completed: boolean,
    userId: number
} 

const get_todos =async ()  => {
    try {
        const response= await axios.get('https://dummyjson.com/todos/random/3')
        const todos:Todo[]=response.data
        // console.log('todolu',typeof todos)
        return todos
        
    } catch (error) {
        console.log(error)
       throw error 
    }
}



export default async function All_todos() {
    const todos= await  get_todos()
    // console.log('all todos',todos)
  return (
    <div>
        {
            todos.map((todo:Todo)=>(
                <p >{todo.todo}</p>
            ))
        }
        <br></br>
        
    </div>
  )
}
