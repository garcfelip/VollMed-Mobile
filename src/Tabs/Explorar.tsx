import { VStack, Text, Divider, ScrollView, Box } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsultas";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { CardMedico } from "../componentes/CardMedico";

export default function Explorar() {
    return (
        <ScrollView p={5}>           

            <Box w={"100%"} borderRadius={"lg"} p={3} mt={10} shadow={1} borderRightRadius={"md"} bg={"white"}>
                <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
                <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
                <Botao mt={3} mb={3}>Buscar</Botao>
            </Box>
            
            <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>Resultado da Busca</Titulo>             
            <CardMedico 
                nome={"Dr. Felipe Garcia"} 
                foto={"https://github.com/garcfelip.png"} 
                especialidade={"Cardiologista"}>            
            </CardMedico>   
            
        
        </ScrollView>
    )
}