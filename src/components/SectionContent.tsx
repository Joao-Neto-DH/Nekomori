import { ReactElement } from "react";
import styled from "styled-components";

const SectionContentUnstyled: React.FC<{
    className?: string, 
    children: ReactElement,
    title: string,
    showButton?: boolean
}> = ({className, children, title, showButton = true}) => (
    <section className={className}>
        <header>
            <h1>
                {title}
            </h1>
            {
                showButton &&
                <div>
                    <button className="btn ri-arrow-drop-left-line" aria-label="próxima lista de animes"></button>
                    <button className="btn ri-arrow-drop-right-line" aria-label="anterior lista de animes"></button>
                </div>
            }
        </header>

        { children }
    </section>
);

const SectionContent = styled(SectionContentUnstyled)`
    header{
        display: flex;
        justify-content: space-between;
        border: none;

        h1{
            font-size: 1.125rem;
        }
        div{
            width: auto;
            margin-left: auto;
            padding: 0;
        }
    }
`;

export default SectionContent;