import { VStack, Text, ScrollView, Avatar, Divider, Button, Center } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo>Meu Perfil</Titulo>

                <Avatar size={"xl"} source={{ uri: "https://github.com/garcfelip.png"}} mt={5}/>

                <Titulo color={"blue.500"}>Informações Pessoais</Titulo>
                <Titulo fontSize={"lg"} mb={1}>Felipe Garcia</Titulo>
                <Text>01/12/2023</Text>
                <Text>São Paulo - SP</Text>

                <Divider mt={5} />

                <Titulo color={"blue.500"} mb={1}>Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
                      

            </VStack>            
        </ScrollView>
    )
}