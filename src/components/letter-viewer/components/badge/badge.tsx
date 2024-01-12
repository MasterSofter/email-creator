import React from "react";
import {BadgeVariants} from "../../../../types/types";

export default function Badge(props : {variant: BadgeVariants, text : string}) : JSX.Element {

    if(props.variant == BadgeVariants.SolidPink || props.variant == BadgeVariants.SolidBlack)
        return(
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
                            backgroundColor: props.variant == BadgeVariants.SolidPink ? "#bb75fe" : "#000000"
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
        else
            return (
                <tr style={ {margin : 0 , padding : 0} }>
                    <td align="center" style={ {
                        margin : 0 ,
                        padding : 0
                    } } >
                        <table
                            align='center'
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                            role='presentation'
                            style={{
                                margin: "0px",
                                padding : "0px" ,
                                height : '25px' ,
                                borderRadius : "24px" ,
                                background: 'linear-gradient(127deg, rgba(236,188,242,1) 0%, rgba(187,117,254,1) 100%)'
                            }}
                        >
                            <tbody>
                            <tr style={{margin: 0, padding: 0}}>
                                <td align='center' style={{
                                    margin: 0,
                                    padding: 0
                                }}>
                                    <table
                                        align='center'
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                        role='presentation'
                                        style={{
                                            marginTop : "2px",
                                            marginBottom : "2px",
                                            marginRight : "2px" ,
                                            marginLeft : "2px" ,
                                            padding: '0',
                                            borderRadius: '26px',
                                            backgroundColor: 'white'
                                        }}
                                    >

                                    <tr style={ {margin : 0 , padding : 0} }>
                                        <td align="center" style={ {
                                            margin : 0 ,
                                            paddingRight : "10px" ,
                                            paddingLeft : "10px" ,
                                            fontSize : "14px",
                                            fontWeight : "500"
                                        } } >
                                            <span>{props.text}</span>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            );




}
