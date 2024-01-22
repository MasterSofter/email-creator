export function Paragraph(props: { is_builtLetter: boolean, text: string }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{borderCollapse:'collapse', padding:0, minWidth:'375px', maxWidth:'600px', marginTop:'20px', marginBottom:'20px', marginLeft: 'auto' ,marginRight: 'auto'}}>
      <tr style={{margin: 0, padding: 0}}>
        <td style={{margin: 0, padding: 0, textAlign: 'left'}}>
          <span>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                WebkitTextSizeAdjust: 'none',
                maxWidth: '600px'
              }}
              dangerouslySetInnerHTML={{
                __html: props.is_builtLetter
                  ? props.text.replaceAll('<br>', '').replaceAll('<p>', '<p style="margin:0; padding:0">')
                  : props.text
              }}
            />
          </span>
        </td>
      </tr>
    </table>
  );
}

