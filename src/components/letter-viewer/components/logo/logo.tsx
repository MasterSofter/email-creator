import React from "react";

export default function Logo() : React.JSX.Element {
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
                            <td align="left" style={{ margin: 0, padding: 0, width: '40%' }}>
                                <a href="https://mai.ru" target="_blank" rel="noreferrer">
                                    <img
                                        src={"/images/label.png"}
                                        alt="MAI Logo"
                                        style={{ width: '100%' }}
                                    />
                                </a>
                            </td>
                            <td></td>
                            <td align="right" style={{ margin: 0, padding: 0, width: '6%' }}>
                                <a href="https://mai.ru" target="_blank" rel="noreferrer">
                                    <img
                                        src={"/images/call-icon.png"}
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
