import { useState, FormEvent } from "react"
import { ContentContainer, HeaderContainer, HeaderContent, Span, TaskCreated, ConcludedTask, Main, InputTask } from "./style"
import { globalStyles } from "./styles/stitches.config"

import LogoImg from './assets/Logo.png'

import { Button } from "./components/Button"
import { CardTask } from "./components/CardTask"
import { EmptyCard } from "./components/EmptyCard"


export interface TaskProps {
    id: number,
    content: string,
    isComplete: boolean,
}

function App() {

  const [task, setTask] = useState<TaskProps[]>([])

  const [ valueInput, setValueInput ] = useState('')

  function handleCreateTask(event: FormEvent){
    event.preventDefault();
    console.log('chamou')
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
          <ConcludedTask>Concluídas: <Span>{0}</Span></ConcludedTask>
        </HeaderContent>
        <Main>
          {task && task.map((task: TaskProps) => {
              return (
                <CardTask 
                  key={task.id}
                  content={task.content} 
                  id={task.id} 
                  isComplete={false} 
                />
              );
            }) 
          }

        </Main>
      </ContentContainer>
    </>  
  )
}

export default App
