import React from "react";

type Props = {
    body: string;
}

export default function BodyLetter({body} : Props) : React.JSX.Element{
    return (
        <tr style={{ margin: 0, padding: 0 }}>
            <td style={{ margin: 0, padding: 0 }}>
                <table
                    align="center"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    role="presentation"
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        borderRadius: '30px',
                        marginBottom: '30px',
                    }}
                >
                    <tbody>
                    {body && (
                        <tr style={{ margin: 0, padding: 0 }}>
                            <td style={{ margin: 0, padding: 0 }}>
                                <table
                                    align="left"
                                    border={0}
                                    cellSpacing={0}
                                    cellPadding={0}
                                    role="presentation"
                                    style={{

                                    }}
                                >
                                    <tbody>

                                    {body && (
                                        <tr style={{ margin: 0, padding: 0 }}>
                                            <td style={{ margin: 0, padding: 0 }}>
                                                <div
                                                    style={{
                                                        display: 'block',
                                                        color: '#000000',
                                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                                        fontSize: '18px',
                                                        fontWeight: 'normal',
                                                        lineHeight: '24px',
                                                        textAlign: 'left',
                                                        textDecoration: 'none',
                                                        WebkitTextSizeAdjust: 'none',
                                                        marginBottom: '30px',
                                                        maxWidth: '600px'
                                                    }}
                                                    dangerouslySetInnerHTML={{__html: body}}
                                                />
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </td>
        </tr>
    );
}
