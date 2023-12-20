import React from "react";

type Props = {
    title: string;
}

export default function Title({title} : Props) : React.JSX.Element {
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
                        borderRadius: '30px',
                        marginBottom: '30px',
                    }}
                >
                    <tbody>
                        {title && (
                            <tr style={{ margin: 0, padding: 0 }}>
                                <td style={{ margin: 0, padding: 0 }}>
                                    <table
                                        align="left"
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                        role="presentation"
                                        style={{
                                            marginTop: '30px',
                                        }}
                                    >
                                        <tbody>

                                        {title && (
                                            <tr style={{ margin: 0, padding: 0 }}>
                                                <td style={{ margin: 0, padding: 0 }}>
                                                    <div
                                                        style={{
                                                            display: 'block',
                                                            color: '#000000',
                                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                                            fontSize: '28px',
                                                            fontWeight: '500',
                                                            lineHeight: '24px',
                                                            textAlign: 'left',
                                                            textDecoration: 'none',
                                                            WebkitTextSizeAdjust: 'none',
                                                            maxWidth: '600px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: title}}
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
