import styled from "styled-components";

const SeparatorUnstyled: React.FC<{
    className?: string, 
    onClick?: ()=> void,
    text?: string,
    useButton?: boolean,
}> = ({className, onClick, text="See all", useButton=true})=>(

    <div className={className} role={"separator"}>
        <hr/>
            {
                useButton ? 
                <button className="btn" onClick={onClick}>{text}</button>
                :
                <span>{text}</span>
            }
        <hr/>
    </div>
);

const Separator = styled(SeparatorUnstyled)`
    display: flex;
    flex-wrap: nowrap;
    padding: 10px;
    align-items: center !important;

    hr{
        width: 44%;
        margin: 0;
        opacity: .3;
        /* align-self: flex-start; */
    }
    button{
        border: 1px solid ${props=>props.theme.colors.terciary};
        padding: 6px 24px;
        margin: 0 auto;
        font-size: .75rem;
    }
    span{
        padding: 0 8px;
    }
`;

export default Separator;