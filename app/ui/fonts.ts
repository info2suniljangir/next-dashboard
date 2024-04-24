// importing the google fonts
// these fonts are used within a component using {nameoffont.className} class;
// Next optimize font by downloading the font files at the time of build and hoisted with the app, It means user wiill not send request for the font to the font library

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
});

