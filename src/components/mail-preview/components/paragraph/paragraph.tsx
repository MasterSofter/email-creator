export function Paragraph(props: { is_builtLetter: boolean, text: string }): JSX.Element {
  return (<tr style={{margin: 0, padding: 0}}>
    <td style={{margin: 0, padding: 0}}>
      <table
        align="center"
        border={0}
        cellSpacing={0}
        cellPadding={0}
        role="presentation"
        style={{
          width: '100%',
          maxWidth: '600px',
          marginBottom: '30px',
        }}
      >
        <tbody>
        {props.text && (<tr style={{margin: 0, padding: 0}}>
          <td style={{margin: 0, padding: 0}}>
            <table
              align="left"
              border={0}
              cellSpacing={0}
              cellPadding={0}
              role="presentation"
              style={{}}
            >
              <tbody>

              {props.text && (<tr style={{margin: 0, padding: 0}}>
                <td style={{margin: 0, padding: 0}}>
                  <div
                    style={{
                      display: 'block',
                      color: '#000000',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'normal',
                      lineHeight: '24px',
                      textAlign: 'left',
                      textDecoration: 'none',
                      WebkitTextSizeAdjust: 'none',
                      maxWidth: '600px'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: props.is_builtLetter
                        ? props.text.replaceAll('<br>', '').replaceAll('<p>', '<p style="margin:0; padding:0">')
                        : props.text
                    }}
                  />
                </td>
              </tr>)}
              </tbody>
            </table>
          </td>
        </tr>)}
        </tbody>
      </table>
    </td>
  </tr>);
}

