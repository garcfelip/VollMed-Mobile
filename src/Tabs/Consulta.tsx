import { VStack, Text, Divider, ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsultas";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consulta() {
    return (
        <ScrollView p={5}>
            
            <Titulo color={"blue.500"} mb={5}>Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            
            <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>Próximas consultas</Titulo>
            <CardConsulta
                nome="Felipe Garcia"
                foto= "https://github.com/garcfelip.png"
                especialidade="Cardiologista"
                data="01/12/2021"
                foiAgendado                                
            />

            <Divider mt={5}></Divider>

            <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>Consultas anteriores</Titulo>
            <CardConsulta
                nome="Felipe Garcia"
                foto= "https://github.com/garcfelip.png"
                especialidade="Cardiologista"
                data="01/12/2021"
                foiAtendido                      
            />
            <CardConsulta 
                nome="Felipe Garcia"
                foto= "https://github.com/garcfelip.png"
                especialidade="Cardiologista"
                data="01/12/2021"
                foiAtendido                      
            />
            <CardConsulta
                nome="Felipe Garcia"
                foto= "https://github.com/garcfelip.png"
                especialidade="Cardiologista"
                data="01/12/2021"
                foiAtendido                      
            />
            
        
        </ScrollView>
    )
}