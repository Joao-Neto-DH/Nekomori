import styled from "styled-components";
import CategoryGroup from "../components/CategoryGroup";
import SectionContent from "../components/SectionContent";

const SearchUnstyled: React.FC<{}> = ()=>{
    
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>
            <SectionContent title="Results of Naruto" showButton={false}>
                <p>He have found 13 results of Naruto</p>
            </SectionContent>
        </>
    );
}

const Search = styled(SearchUnstyled)`

`;

export default Search;