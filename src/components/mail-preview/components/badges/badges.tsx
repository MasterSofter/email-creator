import Badge from '../badge/badge';
import {BadgeVariants} from '../../../../types/types';

export default function Badges(props: { is_builtLetter: boolean, badges: Array<{ variant: BadgeVariants, text: string }> }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%'
           style={{borderCollapse: 'collapse', padding: 0, minWidth:'375px', maxWidth:'600px' , marginTop:'6px', marginBottom:'0px', marginLeft: 'auto' ,marginRight: 'auto'}}>
      <tbody>
      <tr style={{margin: 0, padding: 0}}>
        <td>
          <table>
            <tbody>
            <tr>
              {
                props.badges.map((value, index) => {
                  return (
                    value.text ?
                      <td key={`badge-${index}`} align='left' style={{paddingRight: '2px'}}>
                        <Badge variant={value.variant}
                               text={value.text.replace(' ', '\u00A0')}/>
                      </td>
                      : <td></td>
                  )
                })
              }
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
}