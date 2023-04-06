import { useState } from "react";

const useTitle = (title: string = "Nekomori") => {
    const [, setPageTitle] = useState(title);
    document.title = title;

    const setTitle = (pageTitle: string) => {
        document.title = pageTitle;
        setPageTitle(pageTitle);
    }

    return setTitle;
}

export default useTitle; 