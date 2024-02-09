import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jenny from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salada from '../assets/produtores/salad.png';

const gerarNumeroRandonico = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia:gerarNumeroRandonico(1,500),
            estrelas: gerarNumeroRandonico(1,5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia:gerarNumeroRandonico(1,500),
            estrelas: gerarNumeroRandonico(1,5),
        },
        {
            nome: "Jenny & Jack",
            imagem: jenny,
            distancia:gerarNumeroRandonico(1,500),
            estrelas: gerarNumeroRandonico(1,5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia:gerarNumeroRandonico(1,500),
            estrelas: gerarNumeroRandonico(1,5),
        },

        {
            nome: "Salada",
            imagem: salada,
            distancia:gerarNumeroRandonico(1,500),
            estrelas: gerarNumeroRandonico(1,5),
        }
    ]
}

export default produtores;