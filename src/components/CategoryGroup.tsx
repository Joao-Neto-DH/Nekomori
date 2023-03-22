import { Jakan } from "jakan";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Genre from "../@types/Genre";
import Separator from "./Separator";

const Category: React.FC<{
    className?: string,

}> = ({className}) => {
    const [seeAll, setSeeAll] = useState(false);
    const [genres, setGenres] = useState<Array<Genre>>([]);

    useEffect(()=>{
        const misc = new Jakan().withMemory().forMisc();
        misc.genres("anime")
        .then(res=>res.data)
        .then(data=>setGenres(data as any))
        .catch(err=>console.log(err))
    }, []);

    return (
        <div className={className}>
            <div style={{flexWrap: seeAll ? "wrap" : "nowrap"}}>
                {
                    genres.map(genre=>(<Link to={genre.url} target={"_blank"} key={genre.mal_id}>{genre.name}</Link>))
                }
            </div>
            <Separator onClick={()=>setSeeAll(!seeAll)}/>
        </div>
    );
}

const CategoryGroup = styled(Category)`
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;

        max-width: 100%;
        overflow: hidden;
        gap: 20px;

        a{
            font-size: 0.875rem;
        }
    }
`;

export default CategoryGroup;