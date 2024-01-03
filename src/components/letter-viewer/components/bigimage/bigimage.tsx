import React from "react";

type Props = {
    url: string
}

export function BigImage({url}: Props): React.JSX.Element {
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
                                    src={ url }
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
