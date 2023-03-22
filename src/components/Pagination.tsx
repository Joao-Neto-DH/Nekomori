import { JakanPagination } from "jakan";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PaginationUnstyled: React.FC<{
    className?:string,
    pagination: {current_page: number} & JakanPagination
}> = ({className, pagination}) => (
    <div className={className}>
        {
            pagination.current_page != 1 && <Link to={`?page=${pagination.current_page-1}`} className="ri-arrow-left-line" ></Link>
        }
        <span>{pagination.current_page || 1}</span>
        {
            pagination.has_next_page && <Link to={`?page=${(pagination.current_page+1) || 2}`} className="ri-arrow-right-line"></Link>
        }
    </div>
);

const Pagination = styled(PaginationUnstyled)`
    display: flex;
    justify-content: center;
    *{
        display: flex;
        padding: 8px;
        border: 1px solid rgba(${props=>props.theme.colors.text}, 0.8);
        align-items: center;
        justify-content: center;

        &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-child{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
`;

export default Pagination;