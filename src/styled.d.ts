import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        
        colors: {
            text: string;
            main: string;
            secondary: string;
        }
    }
}