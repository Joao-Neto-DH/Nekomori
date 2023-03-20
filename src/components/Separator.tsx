import styled from "styled-components";

const SeparatorUnstyled: React.FC<{className?: string}> = ({className})=>(
    <div className={className} aria-label="separador">
        <hr/>
        <button className="btn">Ver todos</button>
        <hr/>
    </div>
);

const Separator = styled(SeparatorUnstyled)`
    display: flex;
    flex-wrap: nowrap;
    padding: 10px;
    /* flex-direction: row; */
    align-items: center;

    hr{
        width: 44%;
        margin: 0;
        opacity: .3;
        /* align-self: flex-start; */
    }
    button{
        border: 1px solid var(--terciary);
        padding: 6px 24px;
        margin: 0 auto;
        font-size: .75rem;
    }
`;

export default Separator;