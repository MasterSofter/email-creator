import Badge from '../badge/badge';
import {BadgeVariants} from '../../../../types/types';

export default function InfoItemSignUp(props: { title: string, text: string, imageUrl: string, buttonUrl: string, metroImageUrl: string, age: string, amountOfDays: string, periods: Array<string>, is_builtLetter: boolean }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{
      borderCollapse: 'collapse',
      padding: 0,
      minWidth:'375px',
      maxWidth:'600px',
      marginTop: '0px',
      marginBottom: '30px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
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
              width: '100%',
              borderRadius: '24px',
              background: 'linear-gradient(127deg, rgba(236,188,242,1) 0%, rgba(187,117,254,1) 100%)'
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
                    margin: '0',
                    padding: '0',
                    marginTop: '5px',
                    marginBottom: '5px',
                    marginRight: '5px',
                    marginLeft: '5px',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    height:'190px',
                    width:'97.5%'
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{width:'30%', padding:'5px'}}>
                        <table style={{padding:0, margin:0, width:'100%',height:'100%', minWidth:'130px', maxWidth:'180px'}}>
                          <tbody>
                          <tr style={{margin: 0, padding: 0}}>
                            <td width='100%' height='20%' style={{verticalAlign:'top'}}>
                              <span style={{display:'inline-block', width:'100%'}}>
                                <img style={{width: '100%', borderRadius: '20px'}}
                                     src={props.imageUrl.length > 0
                                       ? props.imageUrl
                                       : (props.is_builtLetter
                                         ? 'https://dev.mai.ru/services/email-creator-tr/images/item-image.png'
                                         : process.env.PUBLIC_URL + '/images/item-image.png')}/>
                              </span>
                            </td>
                          </tr>

                          <tr style={{margin: 0, padding: 0}}>
                            <td width='100%' height='20%' style={{verticalAlign:'bottom',  textAlign: 'center', paddingTop:'10px'}}>
                              <div style={{
                                width:'100%',
                                display:'inline-block',
                                margin: 0,
                                paddingTop: '8px',
                                paddingBottom: '8px',
                                fontSize: '18px',
                                fontWeight: '400',
                                textDecoration: 'none',
                                color: 'white',
                                borderRadius: '14px',
                                backgroundColor: '#0F01FD'
                              }}>
                                <span>
                                  <a href={props.buttonUrl} target='_blank'
                                     style={{textDecoration: 'none', color: 'white'}}>
                                        <span>Записаться</span>
                                      </a>
                                </span>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                      <td style={{width:'70%', padding:'5px'}}>
                        <table style={{margin:0, padding: 0, width:'100%',height:'100%'}}>
                          <tbody>
                          {
                            (props.age || props.amountOfDays || props.metroImageUrl) ?
                            <tr style={{margin: 0, padding: 0}}>
                                <td width='100%' height='20%' style={{verticalAlign:'top'}}>
                                    <div style={{display:'inline-block',width:'100%'}}>
                                        <table align='left' style={{margin:0, padding:0}}>
                                            <tbody>
                                            <tr>
                                              {props.age &&
                                              <td style={{marginRight: '5px', padding: 0, float:'left'}}>
                                                <span>
                                                    <Badge variant={BadgeVariants.SolidPink}
                                                           text={props.age.replace(' ', '\u00A0')}/>
                                                </span>
                                              </td>
                                              }
                                              {props.amountOfDays &&
                                              <td style={{margin: 0, padding: 0, float:'left'}}>
                                                 <span>
                                                     <Badge variant={BadgeVariants.OutlinePink}
                                                            text={props.amountOfDays.replace(' ', '\u00A0')}/>
                                                 </span>
                                              </td>
                                              }
                                              {
                                                props.metroImageUrl &&
                                                <td style={{margin: 0, padding: 0, verticalAlign:'middle', width:'34%'}}>
                                                <span>
                                                    <img style={{
                                                      width:'100%',
                                                      minWidth: '80px',
                                                      maxWidth:'120px'
                                                    }}
                                                         src={props.is_builtLetter
                                                           ? 'https://dev.mai.ru/services/email-creator-tr/images/' + props.metroImageUrl
                                                           : process.env.PUBLIC_URL + '/images/' + props.metroImageUrl}
                                                    />
                                                </span>
                                                </td>
                                              }
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                              : <tr><td height={'10%'}></td></tr>
                          }
                          <tr style={{margin: 0, padding: 0}}>
                            <td width='100%' height='60%' style={{verticalAlign:'top'}}>
                              <div style={{display:'inline-block', height:'24px', width:'100%'}}>
                                 <span
                                   style={{
                                     margin: 0,
                                     padding: 0,
                                     color: '#4636FF',
                                     fontSize: '18px',
                                     fontWeight: '700'
                                   }}>{props.title}</span>
                              </div>
                              <div style={{
                                display:'inline-block',
                                marginTop: '2px',
                                padding: 0,
                                color: 'rgb(0,0,0)',
                                fontSize: '12px',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                                textDecoration: 'none',
                                WebkitTextSizeAdjust: 'none'
                              }}
                                   dangerouslySetInnerHTML={{
                                     __html: props.is_builtLetter
                                       ? props.text.replaceAll('<p>', '<p style="margin:0; padding:0">')
                                       : props.text
                                   }}
                              />
                            </td>
                          </tr>
                          <tr style={{margin: 0, padding: 0}}>
                            <td width='100%' height='20%' style={{verticalAlign:'bottom'}}>
                              <div style={{display:'inline-block', height:'24px', width:'100%'}}>
                                <table>
                                  <tbody>
                                  <tr>
                                    {
                                      props.periods[0] &&
                                      <td style={{
                                        margin: 0,
                                        padding: 0,
                                        float: 'left',
                                        textAlign: 'left'
                                      }}>
                                          <table
                                              align='center'
                                              border={0}
                                              cellSpacing={0}
                                              cellPadding={0}
                                              role='presentation'
                                              style={{
                                                margin: '0px',
                                                padding: '0px',
                                                height: '100%',
                                                width: '100%'
                                              }}
                                          >
                                              <tbody>
                                              <tr style={{margin: 0, padding: 0, float: 'left', textAlign: 'left'}}>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '12px'
                                                  }}>
                                                      <img
                                                          style={{width: '100%', verticalAlign: 'middle'}}
                                                          src={props.is_builtLetter
                                                            ? 'https://dev.mai.ru/services/email-creator-tr/images/clock.png'
                                                            : process.env.PUBLIC_URL + '/images/clock.png'}/>
                                                  </td>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '5px'
                                                  }}/>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: 'auto',
                                                    fontSize: '11px',
                                                    fontWeight: '500'
                                                  }}>
                                                      <span style={{verticalAlign:'middle'}}>{props.periods[0]}</span>
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                    }
                                    {
                                      props.periods[1] &&
                                      <td style={{
                                        marginLeft: '10px',
                                        padding: 0,
                                        float: 'left',
                                        textAlign: 'left'
                                      }}>
                                          <table
                                              align='center'
                                              border={0}
                                              cellSpacing={0}
                                              cellPadding={0}
                                              role='presentation'
                                              style={{
                                                margin: '0px',
                                                padding: '0px',
                                                height: '100%',
                                                width: '100%'
                                              }}
                                          >
                                              <tbody>
                                              <tr style={{margin: 0, padding: 0, float: 'left', textAlign: 'left'}}>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '12px'
                                                  }}>
                                                      <img
                                                          style={{width: '100%', verticalAlign: 'middle'}}
                                                          src={props.is_builtLetter
                                                            ? 'https://dev.mai.ru/services/email-creator-tr/images/clock.png'
                                                            : process.env.PUBLIC_URL + '/images/clock.png'}/>
                                                  </td>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '5px'
                                                  }}/>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: 'auto',
                                                    fontSize: '11px',
                                                    fontWeight: '500'
                                                  }}>
                                                      <span style={{verticalAlign:'middle'}}>{props.periods[1]}</span>
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                    }
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
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
            </tbody>
          </table>
        </td>
      </tr>
    </table>

  );
}
