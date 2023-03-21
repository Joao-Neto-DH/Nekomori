import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const close = keyframes`
    0%, 10%{
        transform: skewX(-20deg);
        left: 5%;
    }
    to{
        left: -100%;
    }
`;

const Internet: React.FC<{className?: string}> = ({className}) => {
    const [show, setShow] = useState(false);
    const [isOnline, setOnline] = useState<boolean>(true);
    
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnline(true);
            setShow(true);
        });
        window.addEventListener("offline", ()=>{
            setOnline(false);
            setShow(true);
        });
    }, [show, isOnline]);

    return (
        <div className={`${className} ${isOnline ? "online":"offline"} ${!show ? "close":""}`} onClick={()=>setShow(false)}>
            <span className="ri-wifi-fill online"></span><p className="online">Conectado</p>
            <span className="ri-wifi-off-fill offline"></span><p className="offline">Sem conexão</p>
        </div>
    );
}

const InternetConnection = styled(Internet)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding: 1rem;
    background-color: ${props=>props.theme.colors.main};
    position: fixed;
    bottom: 5%;
    left: 5%;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    /* transform: skewX(0); */
    transition: 0.2s;
    &.close{
        /* left: -100%;
        transform: skewX(-20deg); */
        /* animation: connectionPane 0.3s ease-in-out 0 1 normal both; */
        animation-name: ${close};
        animation-duration: 0.3s;
        animation-play-state: running;
        animation-fill-mode: both;
    }
    *{
        font-size: 1.25rem;
        margin: 0;
    }
    &:hover{
        transform: scale(0.9);
    }
    
    span{font-size: 2rem;}
    &.online .offline{display: none;}
    &.offline .online{display: none;}
`;

export default InternetConnection;