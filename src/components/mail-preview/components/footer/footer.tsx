export default function Footer(props: { is_builtLetter: boolean; }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{
      borderCollapse: 'collapse',
      padding: 0,
      minWidth: '375px',
      maxWidth: '450px',
      marginTop: '15px',
      marginBottom: '15px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <tbody>
      <tr>
        <td>
          <table align='center' border={0} cellSpacing={0} cellPadding={0} role='presentation'
                 style={{width: '100%', minWidth: '375px', maxWidth: '450px', marginTop: '15px', marginBottom: '30px'}}>
            <tbody>
            <tr style={{margin: 0, padding: 0}}>
              <td style={{margin: 0, padding: 0}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '100%', maxWidth: '200px', display: 'inline-block', verticalAlign: 'top'}}>
                    <a href='https://mai.ru/' style={{
                      padding: 0,
                      margin: 0,
                      color: 'rgb(0,0,0)',
                      textAlign: 'left',
                      display: 'block',
                      fontSize: '13px',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                      textDecoration: 'none'
                    }}>С уважением и любовью ❤️</a>
                  </div>
                  <div style={{display: 'inline-block', verticalAlign: 'top', width: '100%', maxWidth: '250px'}}>
                    <a href='tel:+79017130331' style={{
                      display: 'block',
                      color: 'rgb(0,0,0)',
                      fontSize: '13px',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                      textAlign: 'right',
                      textDecoration: 'none',
                      paddingBottom: '0px'
                    }}>
                      +7&nbsp;(901)&nbsp;713-03-31&nbsp;&nbsp;
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_phone-flip.png' : process.env.PUBLIC_URL + '/images/_phone-flip.png'}
                        alt='phone-flip.png' width='15px' style={{verticalAlign: 'middle'}}/>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{margin: 0, padding: 0}}>
              <td style={{margin: 0, padding: 0}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '100%', maxWidth: '200px', display: 'inline-block', verticalAlign: 'top'}}>
                    <a href='https://mai.ru/' style={{
                      padding: 0,
                      margin: 0,
                      color: 'rgb(0,0,0)',
                      textAlign: 'left',
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      textDecoration: 'none'
                    }}>Детский технопарк МАИ</a>
                  </div>
                  <div style={{display: 'inline-block', verticalAlign: 'top', width: '100%', maxWidth: '250px'}}>
                    <a href='traektoria@mai.ru' style={{
                      display: 'block',
                      color: 'rgb(0,0,0)',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      textAlign: 'right',
                      textDecoration: 'none',
                      paddingBottom: '0px'
                    }}>
                      traektoria@mai.ru&nbsp;&nbsp;
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_envelope.png' : process.env.PUBLIC_URL + '/images/_envelope.png'}
                        alt='envelope.png' width='15px' style={{verticalAlign: 'middle'}}/>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{margin: 0, padding: 0}}>
              <td style={{marginTop: '2px', padding: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '100%', maxWidth: '200px', display: 'inline-block', verticalAlign: 'top'}}>
                  <a href='https://mai.ru/' style={{
                    padding: 0,
                    margin: 0,
                    color: 'rgb(0,0,0)',
                    textAlign: 'left',
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'normal',
                    textDecoration: 'none'
                  }}>“Траектория взлета”</a>
                </div>
                <div style={{display: 'inline-block', verticalAlign: 'top', width: '100%', maxWidth: '250px'}}>
                  <div style={{display: 'block', textAlign: 'right', verticalAlign: 'bottom'}}>
                    <a href='https://t.me/traektoriamai' target='_blank'>
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_telegram.png' : process.env.PUBLIC_URL + '/images/_telegram.png'}
                        alt='telegram.png' width='25px' height='25px'
                        style={{marginTop: '10px', verticalAlign: 'middle'}}/>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://vk.com/traektoriamai' target='_blank'>
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_vk.png' : process.env.PUBLIC_URL + '/images/_vk.png'}
                        alt='vk.png' width='25px' height='25px' style={{marginTop: '10px', verticalAlign: 'middle'}}/>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>

  );
}