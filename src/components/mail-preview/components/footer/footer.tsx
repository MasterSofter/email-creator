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
                        marginTop: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <tbody>
                      <tr style={{height: '30px'}}>
                        <td colSpan={4} style={{maxWidth:'45px', textAlign: 'left'}} >
                          <span
                            style={{
                              display: 'block',
                              color: '#000000',
                              fontSize: '14px',
                              fontWeight: 'normal',
                              textDecoration: 'none',
                              paddingBottom: '0px',
                              textSizeAdjust: 'none'
                            }}
                          >С уважением и любовью ❤️️</span>
                        </td>
                        <td colSpan={4} style={{width: '50px'}}/>
                        <td colSpan={3} style={{maxWidth:'25px', textAlign: 'right'}}>
                          <a href='tel:+79017130331' style={{textDecoration: 'none'}}>
                                            <span
                                              style={{
                                                display: 'block',
                                                color: '#000000',
                                                fontSize: '15px',
                                                fontWeight: 'normal',
                                                textDecoration: 'none',
                                                paddingBottom: '0px',
                                                textSizeAdjust: 'none'
                                              }}
                                            >+7 (901) 713-03-31</span>
                          </a>
                        </td>
                        <td style={{maxWidth: '5px', textAlign: 'right'}}>
                          <a href='tel:+79017130331' style={{textDecoration: 'none'}}>
                            <img
                              src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/phone-flip.png' : process.env.PUBLIC_URL + '/images/phone-flip.png'}
                              alt='envelope-image'
                              style={{width: '100%', maxWidth:'15px', verticalAlign: 'middle'}}
                            />
                          </a>
                        </td>
                      </tr>
                      <tr style={{height: '35px'}}>
                        <td colSpan={4} style={{maxWidth:'45px', textAlign: 'left'}} >
                          <span
                            style={{
                              display: 'block',
                              color: '#000000',
                              fontSize: '14px',
                              fontWeight: 'normal',
                              textDecoration: 'none',
                              paddingBottom: '0px',
                              textSizeAdjust: 'none'
                            }}
                          >Ваш МАИ ✈️️️</span>
                        </td>
                        <td colSpan={4} style={{width: '50px'}}/>
                        <td colSpan={3} style={{maxWidth:'25px', textAlign: 'right'}}>
                          <a href='traektoria@mai.ru' style={{textDecoration: 'none'}}>
                                            <span
                                              style={{
                                                display: 'block',
                                                color: '#000000',
                                                fontSize: '15px',
                                                fontWeight: 'normal',
                                                textDecoration: 'none',
                                                paddingBottom: '0px',
                                                textSizeAdjust: 'none'
                                              }}
                                            >traektoria@mai.ru</span>
                          </a>
                        </td>
                        <td style={{maxWidth: '5px', textAlign: 'right'}}>
                          <a href='traektoria@mai.ru' style={{textDecoration: 'none'}}>
                            <img
                              src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/envelope.png' : process.env.PUBLIC_URL + '/images/envelope.png'}
                              alt='envelope-image'
                              style={{width: '100%', maxWidth:'15px', verticalAlign: 'middle'}}
                            />
                          </a>
                        </td>
                      </tr>
                      <tr style={{height: '30px'}}>
                        <td colSpan={8}/>
                        <td style={{width:'50px'}}/>
                        <td style={{width:'50px'}}/>
                        <td style={{maxWidth: '8px', textAlign: 'left'}}>
                          <a href='' style={{textDecoration: 'none'}}>
                            <img
                              src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/telegram.png' : process.env.PUBLIC_URL + '/images/telegram.png'}
                              alt='envelope-image'
                              style={{width: '100%', maxWidth:'25px', verticalAlign: 'middle'}}
                            />
                          </a>
                        </td>
                        <td style={{maxWidth: '5px', textAlign: 'right'}}>
                          <a href='' style={{textDecoration: 'none'}}>
                            <img
                              src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/vk.png' : process.env.PUBLIC_URL + '/images/vk.png'}
                              alt='envelope-image'
                              style={{width: '100%', maxWidth:'30px', verticalAlign: 'middle'}}
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