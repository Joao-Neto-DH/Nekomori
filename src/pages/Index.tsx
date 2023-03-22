import { Jakan, JakanQueryResponse } from "jakan";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnimeType from "../@types/AnimeType";
import Anime, { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import Pagination from "../components/Pagination";
import SectionContent from "../components/SectionContent";


const Index = ()=> {
    const [response, setResponse] = useState<JakanQueryResponse>();
    const [params] = useSearchParams();
    

    useEffect(()=>{
        const misc = new Jakan().withMemory(5000).forSearch();
        misc.anime({
            q: "",
            page: (params.get("page") as any)|| 1
        })
        .then(res=>setResponse(res))
        .catch(err=>console.log(err))
    },[]);
    
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>

            <SectionContent title="New">
                <>
                    {
                        response?.data && <AnimeGroup animes={response?.data as AnimeType[]}/>
                    }
                </>
            </SectionContent>
            {
                response?.pagination && <Pagination pagination={{current_page: 0, ...response.pagination}}/>
            }
        </>
    );
}

export default Index;