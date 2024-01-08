import React from "react";

export default function Badge(props : {text : string}) : React.JSX.Element {
    return (
        <tr style={ {margin : 0 , padding : 0} }>
            <td align="center" style={ {
                margin : 0 ,
                padding : 0
            } } >
                <table
                    align="center"
                    border={ 0 }
                    cellSpacing={ 0 }
                    cellPadding={ 0 }
                    role="presentation"
                    style={ {
                        margin: "0px",
                        padding : "0px" ,
                        height : '25px' ,
                        borderRadius : "24px" ,
                        backgroundColor: "#bb75fe"
                    } }
                >
                    <tr style={ {margin : 0 , padding : 0} }>
                        <td align="center" style={ {
                            margin : 0 ,
                            paddingRight : "10px" ,
                            paddingLeft : "10px" ,
                            fontSize : "15px",
                            fontWeight : "500",
                            color : "white"
                        } } >
                            <span>{props.text}</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

    );
}
