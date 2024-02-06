import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,

}){
    const RenderEstrelas = () =>{
        const listaEstrelas =[];
        for(let i=0; i <5 ; i++){
            listaEstrelas.push(<Image style={estilos.estrela} source={estrela}/>)
        }
        return listaEstrelas;

    }
    const estilos= estilosFuncao(grande);
    return <View style={estilos.estrelas}> 
         <RenderEstrelas/>
    </View>
    

    
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela:{
        width: grande ? 32 : 12,
        height: grande ? 32 : 12,
        marginRight:2,
    },
    estrelas:{
        flexDirection: 'row',
    }
})