import React, {useEffect, useState} from 'react';
import { Text, FlatList } from 'react-native';
import { carregaProdutores } from '../../../servicos/carregaDados';

export default function Produtores() {
    const [titulo, atualizaTitulo] = useState('');
    const [lista, atualizaLista] = useState([]);

    useEffect(() => {
        const retono = carregaProdutores();
        atualizaTitulo(retono.titulo);
        atualizaLista(retono.lista);
       
    }, []);

    return <FlatList
        data={lista}
        renderItem = {({Item: {nome}}) => <Text>{nome}</Text>}
        ListHeaderComponent  = {()=> < Text>{titulo}</Text>}
        
        
    />

     
         


}