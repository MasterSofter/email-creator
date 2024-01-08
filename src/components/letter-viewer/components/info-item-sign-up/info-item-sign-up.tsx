import React from "react";
import Badge from "../badge/badge";


export default function InfoItemSignUp(props : {title : string, text : string, imageUrl : string, metroImageUrl : string, age : string, amountOfDays : string, periods : Array<string>, is_builtLetter : boolean}): React.JSX.Element {
    return (
        <tr style={ {margin : 0 , padding : 0} }>
            <td style={ {margin : 0 , padding : 0} }>
                <table
                    align="center"
                    border={ 0 }
                    cellSpacing={ 0 }
                    cellPadding={ 0 }
                    role="presentation"
                    style={ {
                        padding : "0px" ,
                        marginTop : '20px' ,
                        marginBottom : '30px' ,
                        width : '100%' ,
                        height : '340px' ,
                        borderRadius : "24px" ,
                        background: "linear-gradient(127deg, rgba(236,188,242,1) 0%, rgba(187,117,254,1) 100%)"
                    } }
                >
                    <tbody>
                        <tr style={ {margin : 0 , padding : 0} }>
                            <td align="center" style={ {
                                margin : 0 ,
                                padding : 0
                            } }>
                                <table
                                    align="center"
                                    border={ 0 }
                                    cellSpacing={ 0 }
                                    cellPadding={ 0 }
                                    role="presentation"
                                    style={ {
                                        margin : "0" ,
                                        padding : "0" ,
                                        height : "96%" ,
                                        width : '98%' ,
                                        borderRadius : "20px" ,
                                        backgroundColor : "white"
                                    } }
                                >
                                    <tbody>
                                        <tr style={ {margin : 0 , padding : 0} }>
                                            <td align="right" style={ {
                                                margin : 0 ,
                                                padding : 0 ,
                                                width : "40%" ,
                                            } }>
                                                <table
                                                    align="center"
                                                    border={ 0 }
                                                    cellSpacing={ 0 }
                                                    cellPadding={ 0 }
                                                    role="presentation"
                                                    style={ {
                                                        margin : "0px" ,
                                                        padding : "0px" ,
                                                        height : "93%" ,
                                                        width : '95%' ,
                                                        borderRadius : "18px"
                                                    } }
                                                >
                                                    <tbody>
                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td align="center" style={ {
                                                                margin : 0 ,
                                                                padding : "0px" ,
                                                                width : "100%" ,
                                                                height : "72%"
                                                            } }>
                                                                <table
                                                                    align="center"
                                                                    border={ 0 }
                                                                    cellSpacing={ 0 }
                                                                    cellPadding={ 0 }
                                                                    role="presentation"
                                                                    style={ {
                                                                        margin : "0px" ,
                                                                        padding : "0px" ,
                                                                        height : "100%" ,
                                                                        width : '100%' ,
                                                                        borderRadius : "18px"
                                                                    } }
                                                                >
                                                                    <tr style={{margin: 0, padding: 0}}>
                                                                        <td align="center"
                                                                            style={{margin: 0, padding: 0}}>
                                                                            <img style={{width: '100%'}}
                                                                                 src={props.imageUrl.length > 0
                                                                                     ? props.imageUrl
                                                                                     : (props.is_builtLetter
                                                                                         ? "https://dev.mai.ru/services/email-creator-tr/images/item-image.png"
                                                                                         : process.env.PUBLIC_URL + "/images/item-image.png")}/>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td align="center" style={ {
                                                                margin : 0 ,
                                                                padding : 0 ,
                                                                width : "100%" ,
                                                                height : "auto"
                                                            } }/>
                                                        </tr>
                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td align="center" style={ {
                                                                margin : 0 ,
                                                                padding : 0 ,
                                                                width : "100%" ,
                                                                height : "23%"
                                                            } }>
                                                                <table
                                                                    align="center"
                                                                    border={ 0 }
                                                                    cellSpacing={ 0 }
                                                                    cellPadding={ 0 }
                                                                    role="presentation"
                                                                    style={ {
                                                                        margin : "0px" ,
                                                                        padding : "0px" ,
                                                                        height : "100%" ,
                                                                        width : '100%' ,
                                                                        borderRadius : "20px" ,
                                                                        backgroundColor : "#0F01FD"
                                                                    } }
                                                                >
                                                                    <tbody>
                                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                                            <td align="center" style={ {
                                                                                margin : 0 ,
                                                                                padding : 0 ,
                                                                                textAlign : "center" ,
                                                                                fontSize : "24px" ,
                                                                                fontWeight : "400" ,
                                                                                color : "white"
                                                                            } }>
                                                                                <a>
                                                                                    <span>Записаться</span>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td align="right" style={ {
                                                margin : 0 ,
                                                padding : 0 ,
                                                width : "8%" ,
                                            } }/>
                                            <td align="left" style={ {
                                                margin : 0 ,
                                                padding : 0 ,
                                                width : "52%"
                                            } }>
                                                <table
                                                    align="center"
                                                    border={ 0 }
                                                    cellSpacing={ 0 }
                                                    cellPadding={ 0 }
                                                    role="presentation"
                                                    style={ {
                                                        margin : "0px" ,
                                                        padding : "0px" ,
                                                        height : "93%" ,
                                                        width : '95%' ,
                                                        borderRadius : "18px"
                                                    } }
                                                >
                                                    <tbody>





                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td style={ {margin : 0 , padding : 0 , height : "7%"} }>
                                                                <table
                                                                    align="center"
                                                                    border={ 0 }
                                                                    cellSpacing={ 0 }
                                                                    cellPadding={ 0 }
                                                                    role="presentation"
                                                                    style={ {
                                                                        margin : "0px" ,
                                                                        padding : "0px" ,
                                                                        height : "100%" ,
                                                                        width : '100%' ,
                                                                        borderRadius : "18px"
                                                                    } }
                                                                >
                                                                    <tr style={ {margin : 0 , padding : 0} }>
                                                                        <td style={ {margin : 0 , padding : 0} }>
                                                                            <table
                                                                                align="center"
                                                                                border={ 0 }
                                                                                cellSpacing={ 0 }
                                                                                cellPadding={ 0 }
                                                                                role="presentation"
                                                                                style={ {
                                                                                    margin : "0px" ,
                                                                                    padding : "0px" ,
                                                                                    height : "100%" ,
                                                                                    borderRadius : "18px"
                                                                                } }
                                                                            >
                                                                                <Badge text={props.age.replace(" ", '\u00A0') }/>
                                                                            </table>
                                                                        </td>
                                                                        <td style={ {margin : 0 , padding : 0} }>
                                                                            <table
                                                                                align="center"
                                                                                border={ 0 }
                                                                                cellSpacing={ 0 }
                                                                                cellPadding={ 0 }
                                                                                role="presentation"
                                                                                style={ {
                                                                                    margin : "0px" ,
                                                                                    padding : "0px" ,
                                                                                    height : "100%" ,
                                                                                    borderRadius : "18px"
                                                                                } }
                                                                            >
                                                                                <Badge text={props.amountOfDays.replace(" ", '\u00A0') }/>
                                                                            </table>
                                                                        </td>
                                                                        <td style={ {margin : 0 , padding : 0, maxWidth: "100px"} }>
                                                                            <table
                                                                                align="center"
                                                                                border={ 0 }
                                                                                cellSpacing={ 0 }
                                                                                cellPadding={ 0 }
                                                                                role="presentation"
                                                                                style={ {
                                                                                    margin : "0px" ,
                                                                                    padding : "0px" ,
                                                                                    height : "100%" ,
                                                                                    width : '100%'
                                                                                } }
                                                                            >
                                                                                <tr style={ {margin : 0 , padding : 0} }>
                                                                                    <td align="center" style={ {margin : 0 , padding : 0} }>
                                                                                        <img style={ {width : '100%'} }
                                                                                             src={props.imageUrl.length > 0
                                                                                            ? props.imageUrl
                                                                                            : (props.is_builtLetter
                                                                                                ? "https://dev.mai.ru/services/email-creator-tr/images/" + props.metroImageUrl
                                                                                                : process.env.PUBLIC_URL + "/images/" + props.metroImageUrl)}
                                                                                        />
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td style={ {margin : 0 , padding : 0 , height : "2%"} }/>
                                                        </tr>

                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td style={ {margin : 0 , padding : 0} }>
                                                                <table
                                                                    align="center"
                                                                    border={ 0 }
                                                                    cellSpacing={ 0 }
                                                                    cellPadding={ 0 }
                                                                    role="presentation"
                                                                    style={ {
                                                                        margin : "0px" ,
                                                                        padding : "0px" ,
                                                                        width : '100%' ,
                                                                        borderRadius : "18px"
                                                                    } }
                                                                >
                                                                    <tr style={ {margin : 0 , padding : 0} }>
                                                                        <td style={ {margin : 0 , paddingBottom: "5%", color: "#4636FF",  fontSize : "24px" , fontWeight : "700" , lineHeight : "34px"} }>
                                                                            <span style={{margin : 0 , padding : 0 }}>{props.title}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style={ {margin : 0 , padding : 0} }>
                                                                        <td style={ {margin : 0 , padding : 0 } }>
                                                                            <div
                                                                                style={ {
                                                                                    margin : 0,
                                                                                    padding : 0,
                                                                                    display : 'block' ,
                                                                                    color : '#000000' ,
                                                                                    fontFamily : 'Arial, Helvetica, sans-serif' ,
                                                                                    fontSize : '18px' ,
                                                                                    fontWeight : 'normal' ,
                                                                                    lineHeight : '24px' ,
                                                                                    textAlign : 'left' ,
                                                                                    textDecoration : 'none' ,
                                                                                    WebkitTextSizeAdjust : 'none'
                                                                                } }
                                                                                dangerouslySetInnerHTML={ {__html : props.text} }
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            <td style={ {margin : 0 , padding : 0 , height : "5%"} }/>
                                                        </tr>

                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            {
                                                                props.periods[0] &&
                                                                <td style={ {margin : 0 , padding : 0 , height : "10%"} }>
                                                                    <table
                                                                        align="center"
                                                                        border={ 0 }
                                                                        cellSpacing={ 0 }
                                                                        cellPadding={ 0 }
                                                                        role="presentation"
                                                                        style={ {
                                                                            margin : "0px" ,
                                                                            padding : "0px" ,
                                                                            height : "100%" ,
                                                                            width : '100%' ,
                                                                            borderRadius : "18px"
                                                                        } }
                                                                    >
                                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                                            {
                                                                                props.periods[0] &&
                                                                                <td style={ {margin : 0 , padding : 0, width : "20%"} }>
                                                                                    <table
                                                                                        align="center"
                                                                                        border={ 0 }
                                                                                        cellSpacing={ 0 }
                                                                                        cellPadding={ 0 }
                                                                                        role="presentation"
                                                                                        style={ {
                                                                                            margin : "0px" ,
                                                                                            padding : "0px" ,
                                                                                            height : "100%" ,
                                                                                            width : '100%'
                                                                                        } }
                                                                                    >
                                                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                                                            <td style={{
                                                                                                margin: 0,
                                                                                                padding: 0,
                                                                                                width: "14px"
                                                                                            }}>
                                                                                                <img
                                                                                                    style={{width: '100%'}}
                                                                                                    src={props.imageUrl.length > 0
                                                                                                        ? props.imageUrl
                                                                                                        : (props.is_builtLetter
                                                                                                            ? "https://dev.mai.ru/services/email-creator-tr/images/clock.png"
                                                                                                            : process.env.PUBLIC_URL + "/images/clock.png")}/>
                                                                                            </td>
                                                                                            <td style={ {margin : 0 , padding : 0, width : "10px"} }>

                                                                                            </td>
                                                                                            <td style={ {margin : 0 , padding : 0, width : "auto" , fontSize:"16px", fontWeight:"500"} }>
                                                                                                <span>{props.periods[0]}</span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            }
                                                                            <td style={ {margin : 0 , padding : 0, width : "2%"} }>

                                                                            </td>
                                                                            { props.periods[1] &&
                                                                            <td style={ {margin : 0 , padding : 0,  width : "20%"} }>
                                                                                <table
                                                                                    align="center"
                                                                                    border={ 0 }
                                                                                    cellSpacing={ 0 }
                                                                                    cellPadding={ 0 }
                                                                                    role="presentation"
                                                                                    style={ {
                                                                                        margin : "0px" ,
                                                                                        padding : "0px" ,
                                                                                        height : "100%" ,
                                                                                        width : '100%'
                                                                                    } }
                                                                                >
                                                                                    <tr style={ {margin : 0 , padding : 0} }>
                                                                                        <td style={ {margin : 0 , padding : 0, width : "14px"} }>
                                                                                            <img style={ {width : '100%'} }
                                                                                                 src={props.imageUrl.length > 0
                                                                                                     ? props.imageUrl
                                                                                                     : (props.is_builtLetter
                                                                                                         ? "https://dev.mai.ru/services/email-creator-tr/images/clock.png"
                                                                                                         : process.env.PUBLIC_URL + "/images/clock.png")}/>
                                                                                        </td>
                                                                                        <td style={ {margin : 0 , padding : 0, width : "10px"} }>

                                                                                        </td>
                                                                                        <td style={ {margin : 0 , padding : 0, width : "auto" , fontSize:"16px", fontWeight:"500"} }>
                                                                                            <span>{props.periods[1]}</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            }
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            }
                                                        </tr>

                                                        <tr style={ {margin : 0 , padding : 0} }>
                                                            {props.periods[0] && <td style={ {margin : 0 , padding : 0 , height : "5%"} }/>}
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>

        </tr>
    );
}
