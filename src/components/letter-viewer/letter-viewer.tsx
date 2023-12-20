import React from "react";
import { LetterData } from "../../types/types";
import Logo from "./components/logo/logo";
import Hero from "./components/hero/hero";
import Title from "./components/title/title";
import BodyLetter from "./components/body-letter/body-letter";

type Props = {
    letterData : LetterData;
}

export default function LetterViewer ({letterData} : Props) : React.JSX.Element{
   return (
       <div style={ {
           width : '100%' ,
           margin : 0 ,
           padding : 0
       } }
       >
           <table align="center"
                  border={ 0 }
                  cellSpacing={ 0 }
                  cellPadding={ 0 }
                  role="presentation"
                  style={ {
                      color : '#1C1E23' ,
                      fontFamily : 'Helvetica, sans-serif, Arial' ,
                      margin : 'auto' ,
                      padding : 0 ,
                      width : '94%' ,
                      minWidth : '200px' ,
                      maxWidth : '600px'
                  } }
           >
               <tbody>
                    <Logo/>
                    <Hero image={ letterData.image }/>
                    <Title title={ letterData.title }/>
                    <BodyLetter body={ letterData.body }/>
               </tbody>
           </table>
       </div>
   );
}

