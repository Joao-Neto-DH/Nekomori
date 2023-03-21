import { ReactElement } from "react";
import Anime, { AnimeGroup } from "../components/Anime";
import CategoryGroup from "../components/CategoryGroup";
import SectionContent from "../components/SectionContent";


const Index = ()=> {
    return(
        <>
            <SectionContent title="Categories" showButton={false}>
                <CategoryGroup />
            </SectionContent>
            <SectionContent title="New">
                <AnimeGroup>
                    <>
                        {
                            new Array<ReactElement>(12).fill(<></>).map((_, index)=><Anime key={index}/>)
                        }
                    </>
                </AnimeGroup>
            </SectionContent>
        </>
    );
}

export default Index;