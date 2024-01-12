export default function Footer(props: { is_builtLetter: boolean; }): JSX.Element {
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
                        width: '100%',
                        maxWidth: '600px',
                        marginTop: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <tbody>
                    <tr style={{
                        marginBottom: '5px',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <td style={{margin: 0, padding: 0, alignItems: 'start'}}>
                            <span
                                style={{
                                    display: 'block',
                                    color: '#000000',
                                    fontSize: '15px',
                                    lineHeight: '28px',
                                    fontWeight: 'normal',
                                    textDecoration: 'none',
                                    paddingBottom: '0px',
                                    textSizeAdjust: 'none'
                                }}
                            >С любовью&nbsp;❤️</span>
                        </td>
                        <td style={{margin: 0, padding: 0, alignItems: 'end'}}>
                            <table
                                align='center'
                                border={0}
                                cellSpacing={0}
                                cellPadding={0}
                            >
                                <tbody>
                                <tr style={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <td style={{marginRight: '10px', padding: 0}}>
                                        <a href='tel:+79017130331' style={{textDecoration: 'none'}}>
                                            <span
                                                style={{
                                                    display: 'block',
                                                    color: '#000000',
                                                    fontSize: '15px',
                                                    lineHeight: '28px',
                                                    fontWeight: 'normal',
                                                    textDecoration: 'none',
                                                    paddingBottom: '0px',
                                                    textSizeAdjust: 'none'
                                                }}
                                            >+7 (901) 713-03-31</span>
                                        </a>
                                    </td>
                                    <td style={{margin: 0, padding: 0, maxWidth: '15px'}}>
                                        <a href='https://mai.ru' target='_blank' rel='noreferrer'>
                                            <img
                                                src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/phone-flip.png' : process.env.PUBLIC_URL + '/images/phone-flip.png'}
                                                alt='phone-image'
                                                style={{width: '100%'}}
                                            />
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr style={{
                        marginBottom: '5px',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <td style={{margin: 0, padding: 0, alignItems: 'start'}}>
                            <span
                                style={{
                                    display: 'block',
                                    color: '#000000',
                                    fontSize: '15px',
                                    lineHeight: '28px',
                                    fontWeight: 'normal',
                                    textDecoration: 'none',
                                    paddingBottom: '0px',
                                    textSizeAdjust: 'none'
                                }}
                            >Ваш МАИ ✈️</span>
                        </td>
                        <td style={{margin: 0, padding: 0, alignItems: 'end'}}>
                            <table
                                align='center'
                                border={0}
                                cellSpacing={0}
                                cellPadding={0}
                            >
                                <tbody>
                                <tr style={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <td style={{marginRight: '10px', padding: 0}}>
                                        <a href='traektoria@mai.ru' style={{textDecoration: 'none'}}>
                                            <span
                                                style={{
                                                    display: 'block',
                                                    color: '#000000',
                                                    fontSize: '15px',
                                                    lineHeight: '28px',
                                                    fontWeight: 'normal',
                                                    textDecoration: 'none',
                                                    paddingBottom: '0px',
                                                    textSizeAdjust: 'none'
                                                }}
                                            >traektoria@mai.ru</span>
                                        </a>
                                    </td>
                                    <td style={{margin: 0, padding: 0, maxWidth: '15px'}}>
                                        <a href='https://mai.ru' target='_blank' rel='noreferrer'>
                                            <img
                                                src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/envelope.png' : process.env.PUBLIC_URL + '/images/envelope.png'}
                                                alt='envelope-image'
                                                style={{width: '100%'}}
                                            />
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr
                        style={{
                            margin: 0,
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'end'
                        }}>
                        <td style={{marginRight: '10px', padding: 0, maxWidth: '30px'}}>
                            <a href='https://mai.ru' target='_blank' rel='noreferrer'>
                                <img
                                    src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/telegram.png' : process.env.PUBLIC_URL + '/images/telegram.png'}
                                    alt='envelope-image'
                                    style={{width: '100%'}}
                                />
                            </a>
                        </td>
                        <td style={{margin: 0, padding: 0, maxWidth: '30px'}}>
                            <a href='https://mai.ru' target='_blank' rel='noreferrer'>
                                <img
                                    src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/vk.png' : process.env.PUBLIC_URL + '/images/vk.png'}
                                    alt='envelope-image'
                                    style={{width: '100%'}}
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