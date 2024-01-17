import Badge from '../badge/badge';
import {BadgeVariants} from '../../../../types/types';

export default function InfoItemSignUp(props: { title: string, text: string, imageUrl: string, buttonUrl: string, metroImageUrl: string, age: string, amountOfDays: string, periods: Array<string>, is_builtLetter: boolean }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{
      borderCollapse: 'collapse',
      padding: 0,
      maxWidth: '600px',
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
                    backgroundColor: 'white'
                  }}
                >
                  <tbody>
                  <tr style={{margin: 0, padding: 0}}>
                    <td width='40%' style={{minWidth: '210px', margin: 0, padding: 0}}>
                      <table
                        align='center'
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        role='presentation'
                        style={{
                          margin: '10px',
                          padding: '0px',
                          borderRadius: '18px'
                        }}
                      >
                        <tbody>
                        <tr style={{margin: 0, padding: 0}}>
                          <td style={{margin: 0, padding: 0}}>
                            <span>
                              <img style={{width: '100%', borderRadius: '34px'}}
                                   src={props.imageUrl.length > 0
                                     ? props.imageUrl
                                     : (props.is_builtLetter
                                       ? 'https://dev.mai.ru/services/email-creator-tr/images/item-image.png'
                                       : process.env.PUBLIC_URL + '/images/item-image.png')}/>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td height='10px'/>
                        </tr>
                        <tr style={{margin: 0, padding: 0}}>
                          <td align='center' style={{
                            margin: 0,
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight: '400',
                            textDecoration: 'none',
                            color: 'white',
                            borderRadius: '16px',
                            backgroundColor: '#0F01FD'
                          }}>
                            <span>
                              <a href={props.buttonUrl} target='_blank'
                                 style={{textDecoration: 'none', color: 'white'}}>
                                    <span>Записаться</span>
                                  </a>
                            </span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                    <td align='left' style={{margin: 0, padding: 0, verticalAlign: 'top'}}>
                      <table
                        align='center'
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        role='presentation'
                        style={{
                          margin: '10px',
                          padding: '0px'
                        }}
                      >
                        <tbody>
                        {
                          (props.age || props.amountOfDays || props.metroImageUrl) &&
                          <tr style={{margin: 0, padding: 0}}>
                              <td height={'24px'} style={{minWidth: '170px'}}>
                                  <table>
                                      <tbody>
                                      <tr>
                                        {props.age &&
                                        <td style={{marginRight: 0, padding: 0}}>
                                          <span>
                                              <Badge variant={BadgeVariants.SolidPink}
                                                     text={props.age.replace(' ', '\u00A0')}/>
                                          </span>
                                        </td>}
                                        {props.age && <td width='10px'/>}
                                        {props.amountOfDays &&
                                        <td style={{margin: 0, padding: 0}}>
                                           <span>
                                               <Badge variant={BadgeVariants.OutlinePink}
                                                      text={props.amountOfDays.replace(' ', '\u00A0')}/>
                                           </span>
                                        </td>
                                        }
                                      </tr>
                                      </tbody>
                                  </table>
                              </td>
                            {
                              props.metroImageUrl &&
                              <td width={'100%'} style={{margin: 0, padding: 0}}>
                                            <span>
                                                <img style={{
                                                  width: '100px',
                                                  verticalAlign: 'middle',
                                                  float: 'right'
                                                }}
                                                     src={props.is_builtLetter
                                                       ? 'https://dev.mai.ru/services/email-creator-tr/images/' + props.metroImageUrl
                                                       : process.env.PUBLIC_URL + '/images/' + props.metroImageUrl}
                                                />
                                            </span>
                              </td>
                            }
                          </tr>
                        }

                        <tr style={{margin: 0, padding: 0}}>
                          <td style={{margin: 0, padding: 0, height: '15px'}}/>
                        </tr>

                        <tr style={{margin: 0, padding: 0}}>
                          <td colSpan={2} style={{margin: 0, padding: 0, minWidth: '280px'}}>
                            <span
                              style={{
                                margin: 0,
                                padding: 0,
                                color: '#4636FF',
                                fontSize: '20px',
                                fontWeight: '700'
                              }}>{props.title}</span>
                          </td>
                        </tr>

                        <tr style={{margin: 0, padding: 0}}>
                          <td style={{margin: 0, padding: 0, height: '10px'}}/>
                        </tr>

                        <tr>
                          <td colSpan={2} height={
                            (props.age || props.amountOfDays || props.metroImageUrl) && props.periods[0] ? '110px' :
                              (!props.age && !props.amountOfDays && !props.metroImageUrl) ? '135px' : '110px'
                          }
                              style={{verticalAlign: 'top'}}>
                            <span
                              style={{
                                margin: 0,
                                padding: 0,
                                color: 'rgb(0,0,0)',
                                fontSize: '14px',
                                fontWeight: 'normal',
                                textAlign: 'left',
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
                          <td style={{margin: 0, padding: 0, height: '10px'}}/>
                        </tr>

                        <tr style={{margin: 0, padding: 0, verticalAlign: 'bottom'}}>
                          {
                            props.periods[0] &&
                            <td colSpan={2} style={{margin: 0, padding: 0}}>
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
                                      width: '100%',
                                      borderRadius: '18px'
                                    }}
                                >
                                    <tbody>
                                    <tr style={{margin: 0, padding: 0}}>
                                      {
                                        props.periods[0] &&
                                        <td style={{
                                          margin: 0,
                                          padding: 0,
                                          width: '50%',
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
                                                      width: '14px'
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
                                                      width: '10px'
                                                    }}>

                                                    </td>
                                                    <td style={{
                                                      margin: 0,
                                                      padding: 0,
                                                      width: 'auto',
                                                      fontSize: '14px',
                                                      fontWeight: '500'
                                                    }}>
                                                        <span>{props.periods[0]}</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                      }


                                      {props.periods[1] &&
                                      <td style={{
                                        margin: 0,
                                        padding: 0,
                                        width: '50%',
                                        float: 'right',
                                        textAlign: 'right'
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
                                              <tr style={{margin: 0, padding: 0, float: 'right'}}>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '14px'
                                                  }}>
                                                      <img style={{width: '100%', verticalAlign: 'middle'}}
                                                           src={props.is_builtLetter
                                                             ? 'https://dev.mai.ru/services/email-creator-tr/images/clock.png'
                                                             : process.env.PUBLIC_URL + '/images/clock.png'}/>
                                                  </td>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: '10px'
                                                  }}>

                                                  </td>
                                                  <td style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    width: 'auto',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                  }}>
                                                      <span>{props.periods[1]}</span>
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                      }
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                          }
                        </tr>
                        <tr style={{margin: 0, padding: 0}}>
                          {props.periods[0] &&
                          <td style={{margin: 0, padding: 0, height: '5%'}}/>}
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
