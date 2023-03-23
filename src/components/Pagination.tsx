import { JakanPagination } from "jakan";
// import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PaginationUnstyled: React.FC<{
    className?:string,
    pagination: {current_page: number} & JakanPagination,
    clearFunction: ()=>void
}> = ({className, pagination, clearFunction}) => {
    const [params] = useSearchParams();
    let othersParams = "";

    params.forEach((value, key)=>{
        if(key !== "page") othersParams += `${key}=${value}&`;
    });

    return (
        <div className={className}>
            {
                pagination.current_page > 2 && <Link to={`?${othersParams}page=1`} onClick={clearFunction}>First</Link>
            }
            {
                pagination.current_page != 1 && <Link to={`?${othersParams}page=${pagination.current_page-1}`} onClick={clearFunction} aria-label="previous page" className="ri-arrow-left-line" ></Link>
            }
            {
                pagination.current_page - 3 > 0 && 
                Array(3).fill("")
                    .map((_, idx)=>pagination.has_next_page && 
                        <Link key={idx} to={`?${othersParams}page=${(pagination.current_page-(3-idx))}`} onClick={clearFunction}>
                            {(pagination.current_page-(3-idx))}
                        </Link>)
            }        
            <span className="active">{pagination.current_page || 1}</span>
            {
                pagination.last_visible_page - pagination.current_page > 3 && 
                Array(3).fill("")
                    .map((_, idx)=>pagination.has_next_page && 
                        <Link key={idx} to={`?${othersParams}page=${(pagination.current_page+(idx+1))}`} onClick={clearFunction}>
                            {(pagination.current_page+(idx+1))}
                        </Link>)
            }
            {
                pagination.has_next_page && <Link to={`?${othersParams}page=${(pagination.current_page+1) || 2}`} onClick={clearFunction} aria-label="next page" className="ri-arrow-right-line"></Link>
            }
            {
                pagination.has_next_page && <Link to={`?${othersParams}page=${(pagination.last_visible_page)}`} onClick={clearFunction}>Last</Link>
            }
        </div>
    );
}

const Pagination = styled(PaginationUnstyled)`
    display: flex;
    justify-content: center;
    *{
        display: flex;
        padding: 8px;
        border: 1px solid rgba(${props=>props.theme.colors.text}, 0.8);
        border-right: none;
        align-items: center;
        justify-content: center;

        &.active{
            background-color: ${props=>props.theme.colors.terciary};
            color: ${props=>props.theme.colors.main};
        }

        &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-child{
            border-right: 1px solid rgba(${props=>props.theme.colors.text}, 0.8);
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
`;

export default Pagination;