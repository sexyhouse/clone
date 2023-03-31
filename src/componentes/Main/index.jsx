import Divisao from "../divisao"

import emily from '../../Garotas/EMILY.jpg'
import ani from '../../Garotas/ANI.jpg'
import luana from '../../Garotas/LUANA.jpg'
import luanny from '../../Garotas/LUANNY.jpg'
import hubner from '../../Garotas/HUBNER.jpg'


import positivo from '../../svg/positivo.svg'
import negativo from '../../svg/negativo.svg'
import neutro from '../../svg/neutro.svg'

const Main = () => {
    return (
        <main>
            <Divisao 
                status={neutro}
                artist={emily}
                name="Emily"
                link="https://www.instagram.com/emihsg_/"
            />
            <Divisao 
                status={neutro}
                artist={ani}
                name="Ani Rocha"
                link="https://www.instagram.com/aanirocha/"
            />
            <Divisao 
                status={neutro}
                artist={luana}
                name="Luana"
                link="https://www.instagram.com/dionisio_lua/"
            />
            <Divisao 
                status={neutro}
                artist={luanny}
                name="Luanny"
                link="https://www.instagram.com/lluannyx/"
            />
            <Divisao 
                status={neutro}
                artist={hubner}
                name="Hubner"
                link="https://www.instagram.com/soyhubner/"
            />

            <p>Última atualização: 31/03/2023</p>
        </main>
    )
}

export default Main