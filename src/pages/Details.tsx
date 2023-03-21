import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import Separator from "../components/Separator";

const DetailsPage: React.FC<{className?: string}> = ({className}) => (
    <SectionContent className={className} showButton={false} title="Naruto the Movie 3: Guardians of the Crescent Moon Kingdom">
        <div>
            <div className="anime-details-header">
                <img src="https://cdn.myanimelist.net/images/anime/6/76017l.webp" alt="Naruto the Movie 3: Guardians of the Crescent Moon Kingdom"/>
                <ul className="anime-info">
                    <li><span>English title: </span>Naruto the Movie 3: Guardians of the Crescent Moon Kingdom</li>
                    <li><span>Japanese title: </span>劇場版 NARUTO -ナルト- 大興奮!みかづき島のアニマル騒動だってばよ</li>
                    <li><span>Type: </span>Movie</li>
                    <li>
                        <span>Genres: </span>
                        <ul>
                            <li><a href="https://myanimelist.net/anime/genre/1/Action">Action</a></li>
                            <li><a href="https://myanimelist.net/anime/genre/2/Adventure">Adventure</a></li>
                            <li><a href="https://myanimelist.net/anime/genre/10/Fantasy">Fantasy</a></li>
                            <li><a href="https://myanimelist.net/anime/genre/10/Fantasy">Fantasy</a></li>
                        </ul>
                    </li>
                    <li><span>Score: </span>6.91</li>
                    <li><span>Scored by: </span>116k</li>
                    <li><span>Since: </span>05-08-2006</li>
                    <li><span>Duration: </span>01h:34min</li>
                    <li><span>Rating: </span>PG-13</li>
                    <li>
                        <span>Studios: </span>
                        <ul>
                            <li><a href="https://myanimelist.net/anime/producer/1/Pierrot" target="_blank">Pierrot</a></li>
                        </ul>
                    </li>
                    <li className="separator">
                        <Separator useButton={false} text="Others"/>
                    </li>
                    <li>
                        <ul>
                            <li><a href="#synopsis" className="btn">Synopsis</a></li>
                            <li><a href="#screenshots" className="btn">Screenshots</a></li>
                            <li><a href="#trailer" className="btn">Trailer</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2 id="synopsis">Synopsis</h2>
            <p>
                Led by Kakashi Hatake, Naruto Uzumaki, Sakura Haruno, and Rock Lee are tasked to escort the 
                extravagant Prince Michiru Tsuki and his spoiled son Hikaru to the prosperous Land of Moon 
                when the two return from a long trip around the world. As if guarding two whimsical high-ranked 
                individuals was not challenging enough, the prince's reckless decision to acquire an entire 
                circus during their journey—mainly to entertain Hikaru's wish of owning the saber-toothed 
                tiger featured in the show—further propels the mission into disarray.\n\nJust as things are 
                finally settling down, the arrival of Michiru's convoy at the Land of Moon is met with an 
                unforeseen crisis—the greedy Chief Minister Shabadaba has taken over the country with the 
                assistance of mysterious, powerful ninjas. While Kakashi's team relentlessly fights the 
                enemy by any means necessary, the two princes are forced to confront a new outlook on 
                life through adversity.\n\n[Written by MAL Rewrite]
            </p>

            <Separator useButton={false} text="" />

            <h2 id="screenshots">Screenshots</h2>
            <ul className="anime-screenshot">
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/1\/2289.webp" alt="naruto" data-target="slide"/></li>
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/5\/10236.webp" alt="naruto" data-target="slide"/></li>
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/7\/17862.webp" alt="naruto" data-target="slide"/></li>
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/13\/17863.webp" alt="naruto" data-target="slide"/></li>
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/9\/23128.webp" alt="naruto" data-target="slide"/></li>
                <li><img src="https:\/\/cdn.myanimelist.net\/images\/anime\/6\/76017.webp" alt="naruto" data-target="slide"/></li>
            </ul>

            <Separator useButton={false} text="" />

            <h2 id="trailer">Trailer</h2>
            <iframe src={"https://www.youtube.com/embed/HC7MbHH0FB0?enablejsapi=1&wmode=opaque&autoplay=1"} style={{width: "100%", height: "70vh"}}></iframe>
        </div>
    </SectionContent>
);

const Details = styled(DetailsPage)`
h1{
    font-size: 1.5rem !important;
}
h2{
    font-size: 1.25rem;
}
.anime-details-header{
    display: flex;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 36px;
    img{
        width: auto;
        border-radius: 4px;
    }
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;

    ul{
        display: inline-block;
    }

    & > li{
        margin: 8px 0;
        font-weight: bold;
    }
    & > li > span{
        font-weight: normal;
    }
    & > li li{
        display: inline-block;
        margin: 0;
        font-weight: normal;
        border-left: 1px solid rgba(${props=>props.theme.colors.text}, 0.3);
        padding: 0 8px;
    }
    & > li li:first-child{
        border: none;
        padding-left: 0;
    }
    a{
        color: ${props=>props.theme.colors.terciary};
    }
}

ul.anime-screenshot{
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: auto;
    align-items: flex-start;
    gap: 8px;

    li{
        cursor: pointer;
    }
}
`;

export default Details