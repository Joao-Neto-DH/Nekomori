import { ReactElement } from "react";
import styled from "styled-components";

const AnimesUnstyled: React.FC<{
    className?: string, 
    children: ReactElement, 
    row?: boolean
}> = ({className, children, row = false}) => (

    <div className={className} >
        { children }
    </div>
);

const Animes = styled(AnimesUnstyled)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: nowrap;
    gap: 40px;
`;

export default Animes;