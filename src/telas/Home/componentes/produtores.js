import React, {useEffect, useState, FlatList} from 'react';
import { Text } from 'react-native';
import { carregaProdutores } from '../../../servicos/carregaDados';

export default function Produtores() {
    const [titulo, atualizaTitulo] = useState('');
    const [lista, atualizaLista] = useState([]);

    useEffect(() => {
        const retono = carregaProdutores();
        atualizaTitulo(retono.titulo);
        atualizaLista(retono.lista);
       
    }, []);

    return <>
      <Text>{titulo}</Text>
      
    </>
     
         


}