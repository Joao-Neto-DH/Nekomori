import { JakanQueryResponse, Jakan } from "jakan";
import { useState, useCallback, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AnimeType from "../@types/AnimeType";
import { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import LoaderIndicator from "../components/LoaderIndicator";
import Pagination from "../components/Pagination";
import SectionContent from "../components/SectionContent";
import useTitle from "../hooks/useTitle";

const Category = () => {
    const [response, setResponse] = useState<JakanQueryResponse>();
    const [params] = useSearchParams();
    const routeParams = useParams();
    const clearResponse = useCallback(()=>setResponse(undefined),[]);
    useTitle(routeParams.category);

    useEffect(()=>{
        if(response) return;

        const search = new Jakan().withMemory().forSearch();
        search.anime({
            q: "",
            page: (params.get("page") as any) || 1,
            genres: routeParams.id
        })
        .then(res=>setResponse(res))
        .catch(err=>console.log(err));
    },[response]);
    
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup clearFunction={clearResponse}/>
            </SectionContent>

            <SectionContent title={routeParams.category || ""}>
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

export default Category;