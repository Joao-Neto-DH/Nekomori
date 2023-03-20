import { ReactElement } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const ContainerUnstyled: React.FC<{className?: string, children: ReactElement}> = ({className, children}) => (
    <div className={className}>
        <Navigation/>

        <main>
            { children }
        </main>
    </div>
);

const Container = styled(ContainerUnstyled)`
    height: calc(100vh - 82px);/* 82px tamanho do cabeçalho */
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    main{
        width: calc(100% - 48px);
        overflow: auto;
    }
`;

export default Container;