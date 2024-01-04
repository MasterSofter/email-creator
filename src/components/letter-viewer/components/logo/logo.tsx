import React , {useEffect} from "react";

type Props = {
    is_builtLetter: boolean;
}

export default function Logo({is_builtLetter} : Props) : React.JSX.Element {
    return (
        <tr style={{ margin: 0, padding: 0}}>
            <td style={{ margin: 0, padding: 0 }}>
                <table
                    align="left"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    role="presentation"
                    style={{
                        marginTop: '30px',
                        marginBottom: '30px',
                        width: '100%'
                    }}
                >
                    <tbody>
                        <tr style={{ margin: 0, padding: 0 }}>
                            <td align="left" style={{ margin: 0, padding: 0, width: '280px', maxWidth: '280px' }}>
                                <a href="https://mai.ru" target="_blank" rel="noreferrer">
                                    <img
                                        src={is_builtLetter ? "https://dev.mai.ru/services/email-creator-tr/images/logo-tr.png" : process.env.PUBLIC_URL + "/images/logo-tr.png"}
                                        alt="MAI Logo"
                                        style={{ width: '100%' }}
                                    />
                                </a>
                            </td>
                            <td style={ {margin : 0 , padding : 0 , width : '280px' , maxWidth : '275px'} }/>
                            <td align="right" style={{ margin: 0, padding: 0, width: '45px' }}>
                                <a href="https://mai.ru" target="_blank" rel="noreferrer">
                                    <img
                                        src={is_builtLetter ? "https://dev.mai.ru/services/email-creator-tr/images/call-icon.png" : process.env.PUBLIC_URL + "/images/call-icon.png" }
                                        alt="MAI Logo"
                                        style={{ width: '100%' }}
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}
