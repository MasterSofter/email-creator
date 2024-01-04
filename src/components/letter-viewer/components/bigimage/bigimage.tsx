import React from "react";

type Props = {
    url: string
    is_builtLetter: boolean;
}

export function BigImage({url, is_builtLetter}: Props): React.JSX.Element {
    return (<tr style={ {margin : 0 , padding : 0} }>
            <td style={ {margin : 0 , padding : 0} }>
                <table
                    align="center"
                    border={ 0 }
                    cellSpacing={ 0 }
                    cellPadding={ 0 }
                    role="presentation"
                    style={ {
                        marginTop : '0px' , marginBottom : '30px' , width : '100%'
                    } }
                >
                    <tbody>
                    <tr style={ {margin : 0 , padding : 0} }>
                        <td align="center" style={ {margin : 0 , padding : 0} }>
                            <a href="https://mai.ru" target="_blank" rel="noreferrer">
                                <img
                                    src={ url.length > 0 ? url : (is_builtLetter ? "https://dev.mai.ru/services/email-creator-tr/images/hero.png" : process.env.PUBLIC_URL + "/images/hero.png") }
                                    alt="Hero"
                                    style={ {width : '100%'} }
                                />
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>

        </tr>);
}
