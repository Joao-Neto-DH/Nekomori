import { Jakan, JakanQueryResponse } from "jakan";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import AnimeType from "../@types/AnimeType";
import { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import LoaderIndicator from "../components/LoaderIndicator";
import Pagination from "../components/Pagination";
import SectionContent from "../components/SectionContent";

const SearchUnstyled: React.FC<{}> = ()=>{
    const [response, setResponse] = useState<JakanQueryResponse>()
    const [params] = useSearchParams();
    const clearResponse = useCallback(()=>setResponse(undefined),[]);

    useEffect(()=>{
        if(response) return;

        const search = new Jakan().withMemory().forSearch();
        search.anime({
            q: params.get("q") || "",
            page: (params.get("page") as any) || 1,
        })
        .then(res=>setResponse(res))
        .catch(err=>console.log(err))
    }, [response]);

    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>
            <SectionContent title={`Results of ${params.get("q") || ""}`} showButton={false}>
                {
                    !response ?
                        <LoaderIndicator visible={true}/>
                        :
                        <p>He have found { response && response.pagination?.items.total } results of { params.get("q") || "" }</p>
                }
            </SectionContent>

            <SectionContent title="" showButton={false}>
                {
                    !response ?
                        <LoaderIndicator visible={true}/>
                        :
                        <AnimeGroup animes={response?.data as AnimeType[]}/>
                }
            </SectionContent>

            {
                response?.pagination && <Pagination clearFunction={clearResponse} pagination={{current_page: 0, ...response?.pagination}} />
            }
        </>
    );
}

const Search = styled(SearchUnstyled)`

`;

export default Search;