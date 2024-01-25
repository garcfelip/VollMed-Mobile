import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TituloProps extends ITextProps {
    children: ReactNode;

}

export function Titulo({ children, ...rest }: TituloProps) {
    return (
        <Text 
            fontSize={'2xl'} 
            fontWeight={'bold'} 
            color={'gray.500'} 
            textAlign={'center'} 
            mt={10}
            {...rest}
        >
       {children}
      </Text>
    )
}