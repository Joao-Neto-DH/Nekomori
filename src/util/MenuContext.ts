import { createContext } from "react";

const MenuContext = createContext({
    menu: {
        isOpened: false,
        toggle: ()=>{}
    }
});

// const MenuProvider = MenuContext.Provider;
// const MenuConsumer = MenuContext.Consumer;

export default MenuContext