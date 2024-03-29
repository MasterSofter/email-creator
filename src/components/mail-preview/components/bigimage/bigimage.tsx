export default function BigImage(props: { address: string, imageUrl: string, is_builtLetter: boolean }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{
      borderCollapse: 'collapse',
      padding: 0,
      minWidth: '375px',
      maxWidth: '450px',
      marginTop: '15px',
      marginBottom: '0px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <tbody>
      <tr style={{margin: 0, padding: 0}}>
        <td style={{margin: 0, padding: 0}}>
          <span>
            <a href={props.address} target='_blank' rel='noreferrer'>
              <img
                src={props.imageUrl ? props.imageUrl
                  : (props.is_builtLetter ? 'https://dev.mai.ru/services/email-creator-tr/images/_hero.png'
                    : process.env.PUBLIC_URL + '/images/_hero.png')}
                alt='Hero'
                style={{width: '100%', borderRadius: '34px'}}
              />
            </a>
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  );
}
