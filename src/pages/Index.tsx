import { Jakan, JakanQueryResponse } from "jakan";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnimeType from "../@types/AnimeType";
import { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import LoaderIndicator from "../components/LoaderIndicator";
import Pagination from "../components/Pagination";
import SectionContent from "../components/SectionContent";


const Index = ()=> {
    const [response, setResponse] = useState<JakanQueryResponse>();
    const [params] = useSearchParams();
    const clearResponse = useCallback(()=>setResponse(undefined),[]);

    // response && console.log(response.pagination)

    useEffect(()=>{
        if(response) return;

        const search = new Jakan().withMemory().forSearch();
        search.anime({
            q: "",
            page: (params.get("page") as any)|| 1,
        })
        .then(res=>setResponse(res))
        .catch(err=>console.log(err));
    },[response]);
    
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>

            <SectionContent title="New">
                <>
                        <LoaderIndicator visible={!response}/>
                    {
                        response?.data && <AnimeGroup animes={response?.data as AnimeType[]}/>
                    }
                </>
            </SectionContent>
            {
                response?.pagination && <Pagination clearFunction={clearResponse} pagination={{current_page: 0, ...response.pagination}}/>
            }
        </>
    );
}

export default Index;