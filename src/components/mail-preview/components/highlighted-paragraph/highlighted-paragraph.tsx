export default function HighlightedParagraph(props: { is_builtLetter: boolean, text: string }): JSX.Element {
  return (
    <table border={0} cellSpacing={0} cellPadding={0} width="100%" style={{
      borderCollapse: "collapse",
      padding: 0,
      minWidth: "375px",
      maxWidth: "450px",
      marginTop: "20px",
      marginBottom: "0px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <tbody>
      <tr style={{margin: 0, padding: 0}}>
        <td style={{margin: 0, padding: 0}}>
          <table
            align="center"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            role="presentation"
            style={{
              padding: "0px",
              margin: "0px",
              borderRadius: "24px",
              background: "rgba(180,176,255,0.5)"
            }}
          >
            <tbody>
            <tr style={{margin: 0, padding: 0}}>
              <td align="center" style={{
                margin: 0,
                padding: "24px"
              }}>
        <span
          style={{
            margin: 0,
            padding: 0,
            fontSize: "14px",
            fontWeight: "normal",
            textAlign: "left",
            textDecoration: "none",
            WebkitTextSizeAdjust: "none"
          }}
          dangerouslySetInnerHTML={{
            __html: props.is_builtLetter
              ? props.text.replaceAll("<p>", "<p style=\"margin: 0; padding: 0;\">")
              : props.text
          }}
        />
              </td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
}
