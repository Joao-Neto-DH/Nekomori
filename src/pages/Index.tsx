import { Jakan, JakanQueryResponse } from "jakan";
import { useEffect, useState } from "react";
import AnimeType from "../@types/AnimeType";
import Anime, { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import SectionContent from "../components/SectionContent";


const Index = ()=> {
    const [response, setResponse] = useState<JakanQueryResponse>();

    useEffect(()=>{
        const misc = new Jakan().withMemory().forSearch();
        misc.anime("")
        .then(res=>setResponse(res))
        .catch(err=>console.log(err))
    },[]);
    
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>

            <SectionContent title="New">
                <AnimeGroup>
                    <>
                        {
                            response && response.data.map(anime=>{
                                const data = anime as AnimeType;
                                return (<Anime data={data} key={data.mal_id}/>)
                            })
                        }
                    </>
                </AnimeGroup>
            </SectionContent>
        </>
    );
}

export default Index;