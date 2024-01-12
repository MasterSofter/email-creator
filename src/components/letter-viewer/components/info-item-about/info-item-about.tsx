export default function InfoItemAbout(props: { text: string }): JSX.Element {
    return (
        <tr style={{margin: 0, padding: 0}}>
            <td style={{margin: 0, padding: 0}}>
                <table
                    align='center'
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    role='presentation'
                    style={{
                        padding: '0px',
                        marginTop: '20px',
                        marginBottom: '30px',
                        width: '100%',
                        borderRadius: '24px',
                        background: 'rgba(180,176,255,0.5)'
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
                                    margin: '40px',
                                    padding: '0',
                                    height: 'auto',
                                    maxWidth: '86%'
                                }}
                            >
                                <tbody>
                                <tr style={{margin: 0, padding: 0}}>
                                    <td style={{margin: 0, padding: 0}}>
                                        <div
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                display: 'block',
                                                color: '#000000',
                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                fontSize: '18px',
                                                fontWeight: 'normal',
                                                lineHeight: '24px',
                                                textAlign: 'left',
                                                textDecoration: 'none',
                                                WebkitTextSizeAdjust: 'none'
                                            }}
                                            dangerouslySetInnerHTML={{__html: props.text}}
                                        />
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