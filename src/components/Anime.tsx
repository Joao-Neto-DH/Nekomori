import styled from "styled-components";

const AnimeUnstyled: React.FC<{className?: string}> = ({className}) => (
    <div className={className}>
        <div>
            <p className="anime-producer">Tokyo TV</p>
            <p className="anime-classification">8 Years</p>
            <button className="anime-play ri-play-fill" aria-label="botão"></button>

            <a href="#">
                <img src="/naruto.jpg" alt="naruto"/>
            </a>
        </div>
        <h2><a href="#">One Piece</a></h2>
        <p className="anime-category">Acção, comédia</p>
    </div>
);

const Anime = styled(AnimeUnstyled)`
> div {
    position: relative;
    
    &:hover > [class*=anime]{
        visibility: visible;
    }
    & > [class*=anime]{
        visibility: collapse;
        position: absolute;
        margin: 0;
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 4px;
        padding: 6px;
        font-size: 0.625rem;
        box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    }
    & > [class*=anime]:nth-child(1){
        top: 10px;
        left: 10px;
    }
    > [class*=anime]:nth-child(2){
        visibility: visible;
        bottom: 10px;
        left: 10px;
    }
    & > [class*=anime]:nth-child(3){
        background-color: #22a9f1;
        top: 10px;
        right: 10px;
    }
}
img{
    width: 100%;
    border-radius: 4px;
}
h2{
    margin: 8px 0;
    /* font-size: 1.2rem; */
    text-transform: uppercase;
    word-wrap: none;
}
.anime-category{
    font-size: 0.75rem;
    margin: 0;
    color: rgba(${props => props.theme.colors.text});
}
`;

export default Anime;