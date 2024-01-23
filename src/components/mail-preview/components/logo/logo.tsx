export default function Logo(props: { is_builtLetter: boolean }): JSX.Element {
    return (
      <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{borderCollapse:'collapse', padding:0, minWidth:'375px', maxWidth:'450px', marginTop:'30px', marginBottom:'0px', marginLeft: 'auto' ,marginRight: 'auto'}}>
          <tbody>
          <tr style={{margin: 0, padding: 0}}>
            <td style={{margin: 0, padding: 0}}>
              <table
                align='left'
                border={0}
                cellSpacing={0}
                cellPadding={0}
                role='presentation'
                style={{width: '100%'}}
              >
                <tbody>
                <tr style={{margin: 0, padding: 0}}>
                  <td align='left' style={{margin: 0, padding: 0, width: '280px', maxWidth: '280px'}}>
                    <a href='https://mai.ru' target='_blank' rel='noreferrer'>
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_logo-tr.png' : process.env.PUBLIC_URL + '/images/_logo-tr.png'}
                        alt='MAI Logo'
                        style={{width: '100%'}}
                      />
                    </a>
                  </td>
                  <td style={{margin: 0, padding: 0, width: '280px', maxWidth: '275px'}}/>
                  <td align='right' style={{margin: 0, padding: 0, width: '45px'}}>
                    <a href='tel:+79017130331' rel='noreferrer'>
                      <img
                        src={props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_call-icon.png' : process.env.PUBLIC_URL + '/images/_call-icon.png'}
                        alt='MAI Logo'
                        style={{width: '100%'}}
                      />
                    </a>
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
