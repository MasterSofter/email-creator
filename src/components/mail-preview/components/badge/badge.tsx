import React from 'react';
import {BadgeVariants} from '../../../../types/types';

export default function Badge(props: { variant: BadgeVariants, text: string }): JSX.Element {

  if (props.variant == BadgeVariants.SolidPink || props.variant == BadgeVariants.SolidBlack)
    return (
      <table border={0} cellSpacing={0} cellPadding={0}  width='100%' style={{borderCollapse:'collapse', padding:0, margin:0}}>
        <tr style={{margin: 0, padding: 0}}>
          <td align='left' style={{
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
                margin: '0px',
                padding: '0px',
                height: '18px',
                borderRadius: '24px',
                backgroundColor: props.variant == BadgeVariants.SolidPink ? '#bb75fe' : '#000000'
              }}
            >
              <tbody>
              <tr style={{margin: 0, padding: 0}}>
                <td align='center' style={{
                  margin: 0,
                  paddingTop: 0,
                  paddingBottom : 0,
                  paddingRight: '8px',
                  paddingLeft: '8px',
                  fontSize: '10px',
                  fontWeight: '500',
                  color: 'white'
                }}>
                  <span>{props.text}</span>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    );
  else
    return (
      <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{borderCollapse:'collapse', padding:0, margin:0}}>
        <tr style={{margin: 0, padding: 0}}>
          <td align='left' style={{
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
                margin: '0px',
                padding: '0px',
                height: '18px',
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
                      height: '15px',
                      marginTop: '0px',
                      marginBottom: '0px',
                      marginRight: '2px',
                      marginLeft: '2px',
                      padding: '0 ',
                      borderRadius: '24px',
                      backgroundColor: 'white'
                    }}
                  >
                    <tbody>
                    <tr style={{margin: 0, padding: 0}}>
                      <td align='center' style={{
                        margin: 0,
                        paddingTop: 0,
                        paddingBottom : 0,
                        paddingRight: '8px',
                        paddingLeft: '8px',
                        fontSize: '10px',
                        fontWeight: '500'
                      }}>
                        <span>{props.text}</span>
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
