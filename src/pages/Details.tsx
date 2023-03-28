import { Jakan } from "jakan";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import AnimeType from "../@types/AnimeType";
import Image from "../@types/Image";
import CategoryGroup from "../components/CategoryGroup";
import LoaderIndicator from "../components/LoaderIndicator";
import SectionContent from "../components/SectionContent";
import Separator from "../components/Separator";
import mediaQuery from "../util/mediaQuery";

function scored(score: number = 0): string{
    return score < 1000 ? score.toString() : `${Math.floor(score/1000)}k`;
}

const DetailsPage: React.FC<{className?: string}> = ({className}) => {
    const [data, setData] = useState<AnimeType>();
    const [pictures, setPictures] = useState<Image[]>();
    const params = useParams();

    useEffect(()=>{
        const search = new Jakan().withMemory().forSearch();

        search.anime(parseInt(params.id || "1"))
        .then(res=>setData(res.data as AnimeType))
        .catch(err=>console.log(err));

        if(!pictures){
            search.anime(parseInt(params.id || "1"), "pictures")
            .then(res=>setPictures(res.data as any))
            .catch(err=>console.log(err));
        }
    },[]);

    return(
        <>
            <SectionContent title="Categories" showButton={false} >
                <CategoryGroup />
            </SectionContent>
            <SectionContent className={className} showButton={false} title={params.title || ""}>
                <div>
                    <div className="anime-details-header">
                        <LoaderIndicator visible={!data} />
                        {
                            data && <img src={data.images.webp.large_image_url} alt={params.title}/>
                        }
                        <ul className="anime-info">
                            <li><span>English title: </span>{params.title}</li>
                            <li><span>Japanese title: </span>{data?.titles.filter(anime=>anime.type === "Japanese").at(0)?.title}</li>
                            <li><span>Type: </span>{data?.type}</li>
                            <li>
                                <span>Genres: </span>
                                <ul>
                                    {
                                        data?.genres.map(genre=><li key={genre.mal_id}><Link to={`/category/${genre.mal_id}/${genre.name}`}>{genre.name}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li><span>Score: </span>{data?.score}</li>
                            <li><span>Scored by: </span>{scored(data?.scored_by)}</li>
                            <li><span>Since: </span>{data && `${data?.aired.prop.from.day.toString().padStart(2, "0")}-${data?.aired.prop.from.month.toString().padStart(2, "0")}-${data?.aired.prop.from.year}`}</li>
                            <li><span>Duration: </span>{data?.duration}</li>
                            {
                                data?.type === "TV" && <li><span>Episodes: </span>{data?.episodes}</li>
                            }
                            <li><span>Rating: </span>{data?.rating}</li>
                            <li>
                                <span>Studios: </span>
                                <ul>
                                    {
                                        data?.studios.map(studio=><li key={studio.mal_id}><Link to={studio.url} target="_blank">{studio.name}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li className="separator">
                                <Separator useButton={false} text="Others"/>
                            </li>
                            <li>
                                <ul>
                                    <li><a href={"#synopsis"} className="btn">Synopsis</a></li>
                                    <li><a href={"#screenshots"} className="btn">Screenshots</a></li>
                                    <li><a href={"#trailer"} className="btn">Trailer</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <h2 id="synopsis">Synopsis</h2>
                    <p>{data?.synopsis}</p>

                    <Separator useButton={false} text="" />

                    <h2 id="screenshots">Screenshots</h2>
                    <ul className="anime-screenshot">
                        <LoaderIndicator visible={!pictures} />
                        {
                            pictures && pictures.map((img, idx)=><li key={idx}><img src={img.webp.image_url} alt={params.title} data-target="slide"/></li>)
                        }
                    </ul>

                    <Separator useButton={false} text="" />

                    <h2 id="trailer">Trailer</h2>
                    {
                        data?.trailer ? 
                            <iframe src={data.trailer.embed_url} style={{width: "100%", height: "70vh"}}></iframe>
                            :
                            <h3>No Trailer to see</h3>
                    }
                </div>
            </SectionContent>
        </>
    );
}

const Details = styled(DetailsPage)`
    h1{
        font-size: 1.5rem !important;
    }
    h2{
        font-size: 1.25rem;
    }
    .anime-details-header{
        display: flex;
        justify-content: left;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 36px;
        img{
            width: auto;
            border-radius: 4px;
        }
    }
    ul{
        width: auto;
        list-style: none;
        padding: 0;
        margin: 0;

        ul{
            display: inline-block;
        }

        & > li{
            margin: 8px 0;
            font-weight: bold;
        }
        & > li > span{
            font-weight: normal;
        }
        & > li li{
            display: inline-block;
            margin: 0;
            font-weight: normal;
            border-left: 1px solid rgba(${props=>props.theme.colors.text}, 0.3);
            padding: 0 8px;
        }
        & > li li:first-child{
            border: none;
            padding-left: 0;
        }
        a{
            color: ${props=>props.theme.colors.terciary};
        }
    }

    ul.anime-screenshot{
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow: auto;
        align-items: flex-start;
        gap: 8px;

        li{
            cursor: pointer;
        }
    }
    iframe{
        border: none;
    }

    @media screen and (min-width: ${mediaQuery.tablet}px){
        .anime-details-header{
            flex-direction: row;
        }
    }
`;

export default Details