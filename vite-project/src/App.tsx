import { useState, FormEvent } from "react"
import { ContentContainer, HeaderContainer, HeaderContent, Span, TaskCreated, ConcludedTask, Main, InputTask } from "./style"
import { globalStyles } from "./styles/stitches.config"

import LogoImg from './assets/Logo.png'

import { Button } from "./components/Button"
import { CardTask } from "./components/CardTask"
import { EmptyCard } from "./components/EmptyCard"


interface TaskProps {
    id: number,
    content: string,
    isComplete: boolean,
    onDelete?: (taskToDelete: number) => void,
}

function App() {

  const [task, setTask] = useState<TaskProps[]>([])

  const [ valueInput, setValueInput ] = useState('')

  function handleDeleteTask(taskToDelete: number) {
    const tasksWhithoutDeleteOne = task.filter(task => {
      return task.id != taskToDelete
    })
    setTask(tasksWhithoutDeleteOne)
  }

  function handleCreateTask(event: FormEvent){
    event.preventDefault();
    if(task){
      setTask((state) => {
        return (
          [...state, {
            id: new Date().getUTCMilliseconds(),
            content: valueInput,
            isComplete: false,
          }]
        )
      })
    }else{
      setTask([{
        id: new Date().getUTCMilliseconds(),
        content: valueInput,
        isComplete: false,
      }])
    }
    setValueInput('')
  }

  function handleUpdateStatusTask(taskToUpdate: number){
    const UpdatedTask = task.filter(task => {
      if(task.id === taskToUpdate){
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTask(UpdatedTask)
    console.log(task)
  }

  globalStyles();

  return (
    <>
      <HeaderContainer>
        <img src={LogoImg} alt='Imagem de logo marca da  página' />
        <form onSubmit={handleCreateTask} >
          <InputTask 
              type='text' 
              placeholder='Adicione uma nova tarefa'
              onChange={(value) => setValueInput(value.target.value)}
              value={valueInput}
          />
          <Button />
        </form>
      </HeaderContainer>
      <ContentContainer>
        <HeaderContent>
          <TaskCreated>Tarefas criadas: <Span>{task.length}</Span></TaskCreated>
          <ConcludedTask>Concluídas: <Span>{task.filter(task => task.isComplete === true).length}</Span></ConcludedTask>
        </HeaderContent>
        <Main>
          {task.length > 0 ? task.map((task: TaskProps) => {
              return (
                <CardTask 
                  key={task.id}
                  content={task.content} 
                  id={task.id} 
                  isComplete={task.isComplete} 
                  onDelete={handleDeleteTask}
                  onUpdate={handleUpdateStatusTask}
                />
              );
            }) : <EmptyCard /> 
          }
        </Main>
      </ContentContainer>
    </>  
  )
}

export default App
