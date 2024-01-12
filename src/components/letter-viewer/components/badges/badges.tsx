import Badge from '../badge/badge';
import {BadgeVariants} from '../../../../types/types';

export default function Badges(props: { is_builtLetter: boolean, badges: Array<{ variant: BadgeVariants, text: string }> }): JSX.Element {
    return (
        <tr style={{margin: 0, padding: 0}}>
            <td style={{margin: 0, padding: 0}}>
                <table
                    align='center'
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    role='presentation'
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        marginBottom: '30px',
                    }}
                >
                    <tbody>
                    <tr style={{margin: 0, padding: 0}}>
                        <td style={{
                            margin: 0,
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start'
                        }}>
                            {
                                props.badges.map((value, index) => {
                                    return (
                                        <>
                                            { value.text.length > 0 &&
                                                <table
                                                key={`badge-${index}`}
                                                align='left'
                                                border={0}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                role='presentation'
                                                style={{
                                                marginRight: '10px',
                                                padding: '0px',
                                                height: '100%'
                                            }}
                                                >
                                                    <Badge variant={value.variant}
                                                    text={value.text.replace(' ', '\u00A0')}/>
                                                </table>}
                                        </>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}