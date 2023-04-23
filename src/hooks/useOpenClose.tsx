import { useState } from "react"

const useOpenClose = (open = false)=>{
    const [isOpened, setIsOpened] = useState(open);
 
    function toggle(): void {
        setIsOpened(!isOpened);
    }

    return {isOpened, toggle};
}

export {useOpenClose}