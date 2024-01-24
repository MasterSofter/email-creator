import {ButtonAlign} from '../../../../types/types';

export default function ButtonCustom(props: {
  buttonUrl: string,
  buttonText: string,
  buttonAlign: ButtonAlign,
  is_builtLetter: boolean
}): JSX.Element {
  return (
    <table width='100%' style={{
      borderCollapse: 'collapse',
      padding: 0,
      minWidth: '375px',
      maxWidth: '450px',
      marginTop: '20px',
      marginBottom: '0px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <tbody>
      <tr style={{margin: 0, padding: 0}}>
        <td width="100%" style={{
          margin: 0, padding: 0, verticalAlign: 'middle', textAlign: `${props.buttonAlign === ButtonAlign.Left ? 'left'
            : props.buttonAlign === ButtonAlign.Center ? 'center'
              : 'right'}`
        }}>
          <div style={{
            minWidth: '160px',
            maxWidth: '300px',
            display: 'inline-block',
            margin: 0,
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            fontSize: '18px',
            fontWeight: '400',
            textDecoration: 'none',
            color: 'white',
            borderRadius: '14px',
            backgroundColor: '#0F01FD',
            textAlign: 'center'
          }}>
            <span>
              <a href={props.buttonUrl} target='_blank' rel='noreferrer'
                 style={{textDecoration: 'none', color: 'white'}}>
                    <span>{props.buttonText}</span>
                  </a>
            </span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  );
}