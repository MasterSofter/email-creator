import React from "react";

type Props = {
    title: string;
}

export default function Title({title}: Props): React.JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width='100%' style={{borderCollapse:'collapse', padding:0, maxWidth:'600px', marginTop:'20px', marginBottom:'20px', marginLeft: 'auto' ,marginRight: 'auto'}}>
      <tbody>
        <tr style={ {margin : 0 , padding : 0} }>
          <td style={ {margin: 0, padding : 0, textAlign : 'left'} }>
            <span
              style={ {
                textAlign : 'left',
                fontSize : '24px' ,
                fontWeight : '500' ,
                textDecoration : 'none' ,
                WebkitTextSizeAdjust : 'none' ,
              } }
            >{title}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
