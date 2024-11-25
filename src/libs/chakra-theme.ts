import { extendTheme, ThemeOverride } from "@chakra-ui/react";


const theme: ThemeOverride = {
    colors:{
        brand:{
            primary:{
                500: "#3F3F3F"
            }
        }
    }
}

export const chakraTheme = extendTheme(theme)