import styled from "styled-components";

const FooterUnstyled: React.FC<{className?: string}> = ({className}) => {
    return ( 
        <footer className={className}>
            <div>
                <p>Todos Direitos Reservados - &copy; 2023</p>
                <p>Desenvolvido por João Neto - Agradecimentos a <a href="https://jikan.moe/" target="_blank">Jikan</a></p>
            </div>
        </footer>
     );
}

const Footer = styled(FooterUnstyled)`
    /* background-color: ${props=>props.theme.colors.secondary}; */
    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
    /* right: 0; */

    text-align: center;
    padding: 4px 0;
    margin-top: 20px;
    
    p{
        font-size: 12px;
    }
`

export default Footer;