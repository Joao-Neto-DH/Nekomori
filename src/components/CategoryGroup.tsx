import { useState } from "react";
import styled from "styled-components";
import Separator from "./Separator";

const Category: React.FC<{
    className?: string,

}> = ({className}) => {
    const [seeAll, setSeeAll] = useState(false);

    return (
        <div className={className}>
            <div style={{flexWrap: seeAll ? "wrap" : "nowrap"}}>
                {
                    new Array(34).fill(<a href="/">Action</a>)
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

        max-width: 100%;
        overflow: hidden;
        gap: 10px;
    }
`;

export default CategoryGroup;