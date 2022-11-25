import { ContainerCardEmpty } from "./style";
import ImgEmpty from '../../assets/Clipboard.png'
export function EmptyCard(){
    return (
        <ContainerCardEmpty>
            <img src={ImgEmpty} alt="imagem que aparece quando não há tarefas" />
            <p>
                Você ainda não tem tarefas cadastradas
            </p>
            <span>
                Crie tarefas e organize seus itens a fazer
            </span>
        </ContainerCardEmpty>
    );
}