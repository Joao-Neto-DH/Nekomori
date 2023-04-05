import Image from "../@types/Image";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { Pagination, Zoom, Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import mediaQuery from "../util/mediaQuery";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Pictures: React.FC<{images: Image[]}> = ({images}) => {
   
    return (
        <>
            {
                <Dialog.Root>
                    {
                        images.map((img, idx)=>
                            <li key={idx}>
                                <Dialog.Trigger>
                                    <img src={img.webp.image_url} alt={img.webp.image_url}/>
                                </Dialog.Trigger>
                            </li>
                        )
                    }
                    <Dialog.Portal>
                        <DialogOverlay/>
                        <DialogContent asChild={true}>
                            <div>
                                <Swiper 
                                slidesPerView={"auto"} 
                                modules={[Pagination, Zoom, Navigation]} 
                                navigation
                                pagination={{clickable:true}}
                                zoom={{}}>
                                    {
                                        images.map((img, idx)=>
                                            <SwiperSlide key={idx} zoom={true}>
                                                <img src={img.webp.large_image_url} alt={img.webp.image_url}/>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </DialogContent>
                    </Dialog.Portal>
                </Dialog.Root>
            }
        </>
    );
}

const DialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(0,0,0,0.6);
    /* z-index: 100000; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogContent = styled(Dialog.Content)`
    max-height: 100vh;
    max-width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;

    & > div{
        width: 270px;
        /* height: 100%; */
    }

    img{
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    @media screen and (min-width: ${mediaQuery.largeMobile}px){
        /* max-width: 80%; */
        & > div{
            width: 350px;
        }
    }
    @media screen and (min-width: ${mediaQuery.smallDesktop}px){
        /* max-width: 80%; */
        & > div{
            width: 440px;
        }
    }
    `

export default Pictures;