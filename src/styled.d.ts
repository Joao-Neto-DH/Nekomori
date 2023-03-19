import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        text: string;
    
        colors: {
            main: string;
            secondary: string;
        }
    }
}