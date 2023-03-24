import styled from "styled-components";
// import { ReactElement } from "react";
import AnimeType from "../@types/AnimeType";
import { Link } from "react-router-dom";

const AnimeUnstyled: React.FC<{
    className?: string,
    data: AnimeType
}> = ({className, data}) => (
    <div className={className}>
        <div>
            <p className="anime-producer">{data.producers.length && data.producers[0].name}</p>
            <p className="anime-classification">{data.rating}</p>
            <button className="anime-play ri-play-fill" aria-label="botão"></button>

            <Link to={`/${data.mal_id}/${data.titles.filter(anime=>anime.type === "Default").at(0)?.title}`}>
                <img src={data.images.webp.image_url} alt={data.titles[0].title}/>
            </Link>
        </div>
        <h2>
            <Link to={`/${data.mal_id}/${data.titles.filter(anime=>anime.type === "Default").at(0)?.title}`}>{data.titles[0].title}</Link>
        </h2>
        <p className="anime-category">
            {
                data.genres.map(genre=><Link to={"#"} key={genre.mal_id}>{genre.name}</Link>)
            }
        </p>
    </div>
);

const AnimesUnstyled: React.FC<{
    className?: string, 
    animes: AnimeType[]
}> = ({className, animes}) => (

    <div className={className} >
        { 
            animes.map(anime=><Anime key={anime.mal_id} data={anime} />)
        }
    </div>
);

const Animes = styled(AnimesUnstyled)`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* flex-wrap: nowrap; */
    gap: 20px;
`;


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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    a{
        font-size: 0.75rem;
        margin: 0;
        margin-right: 6px;
        color: rgba(${props => props.theme.colors.text}, 0.8);
    }
}
`;

export default Anime;
export {Animes as AnimeGroup};