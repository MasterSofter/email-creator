export default function InfoItemAbout(props: { is_builtLetter: boolean, text: string }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{borderCollapse:'collapse', padding:0, maxWidth:'600px', marginTop:'40px', marginBottom:'30px', marginLeft: 'auto' ,marginRight: 'auto'}}>
      <tr style={{margin: 0, padding: 0}}>
        <td style={{margin: 0, padding: 0}}>
          <table
            align="center"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            role="presentation"
            style={{
              padding: '0px',
              margin: '0px',
              borderRadius: '24px',
              background: 'rgba(180,176,255,0.5)'
            }}
          >
            <tbody>
            <tr style={{margin: 0, padding: 0}}>
              <td align="center" style={{
                margin: 0,
                padding: '32px'
              }}>
                <span
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '16px',
                    fontWeight: 'normal',
                    textAlign: 'left',
                    textDecoration: 'none',
                    WebkitTextSizeAdjust: 'none'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: props.is_builtLetter
                      ? props.text.replaceAll('<br>', '')
                      : props.text
                  }}
                />
              </td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
  );
}