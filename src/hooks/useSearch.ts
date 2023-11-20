import { Jakan, JakanQueryResponse } from "jakan"
import { useEffect, useReducer, useRef } from "react"
import { useSearchParams } from "react-router-dom"

type SearchAction = {
    type: "LOADING"|"SUCCESS"|"ERROR",
    payload?: JakanQueryResponse
}
type Result = {
    response: JakanQueryResponse,
    status: "LOADING"|"SUCCESS"|"ERROR",
}

const initialSearch: Result = {
    response: {data: []},
    status: "LOADING"
}

const reducer = (result: Result, action: SearchAction): Result => {
    switch (action.type) {
        case "ERROR": return {status: action.type, response: {data: []}};
        case "SUCCESS": return {status: action.type, response: action.payload!};
        case "LOADING": 
        default: return {status: action.type, response: {data: []}};
    }
}

function useSearch(){
    const [result, dispatch] = useReducer(reducer, initialSearch);
    const [params] = useSearchParams();
    const queryParams = useRef({page: "", q: ""});

    useEffect(()=>{
        const isSameQuery = queryParams.current.q === params.get("q");

        if(result.status !== "LOADING" && isSameQuery) return;
        queryParams.current = {page: params.get("page")||"", q: params.get("q") || ""};

        const search = new Jakan().withMemory().forSearch();
        search.anime({
            q: queryParams.current.q,
            page: Number(queryParams.current.page) || 1,
            sfw: false,
            //order_by: "score",
            //sort: "desc"
        })
        .then(res=>dispatch({type: "SUCCESS", payload: res}))
        .catch(err=>dispatch({type: "ERROR"}))
    })

    return {result, dispatch}
}

export default useSearch
