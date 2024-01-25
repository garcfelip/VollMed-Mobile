import { Text, Avatar, VStack }from 'native-base';
import { Botao } from './Botao';


interface CardMedicoProps {
    nome: string;
    foto: string;
    especialidade: string;
}


export function CardMedico({ nome, foto, especialidade }: CardMedicoProps) {
    return(
        <VStack w={"100%"} bg={'white'} p={5} borderRadius={"lg"} shadow={"2"} mb={5}>
            <VStack flexDir={"row"}>
                
                <Avatar size={"lg"} source={{ uri: foto}}/>
                
                <VStack pl={4}>
                    <Text fontSize={'md'} bold>{nome}</Text>
                    <Text>{especialidade}</Text>                    
                </VStack>
            </VStack>
            <Botao mt={4}>{'Agendar Consulta'}</Botao>
        </VStack>
    )
}