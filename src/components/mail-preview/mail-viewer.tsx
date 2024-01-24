import Logo from './components/logo/logo';
import Title from './components/title/title';
import {
  BadgesElement,
  BigImageElement,
  ButtonElement,
  HighlightedParagraphElement,
  MailData,
  ParagraphElement,
  ProductCardElement,
  TitleElement
} from '../../types/types';
import BigImage from './components/bigimage/bigimage';
import Paragraph from './components/paragraph/paragraph';
import ProductCard from './components/product-card/product-card';
import HighlightedParagraph from './components/highlighted-paragraph/highlighted-paragraph';
import Footer from './components/footer/footer';
import Badges from './components/badges/badges';
import ButtonCustom from './components/button-custom/button-custom';

export default function MailViewer(props: {
  mailData: MailData,
  is_builtLetter: boolean,
}): JSX.Element {
  return (
    <table width='100%' cellSpacing={0} cellPadding={0} border={0} style={{
      borderCollapse: 'collapse',
      fontFamily: 'Helvetica, sans-serif, Arial',
      color: 'black',
      fontSize: '14px'
    }}>
      <tbody>
      <tr style={{verticalAlign: 'top'}}>
        <td>
          <table width='100%' align='center' cellSpacing='0' cellPadding='0' border={0}
                 style={{borderCollapse: 'collapse', minWidth: '375px', maxWidth: '450px', width: '100%'}}>
            <tbody>
            <tr style={{verticalAlign: 'top'}}>
              <td>
                <Logo is_builtLetter={props.is_builtLetter}/>
                {
                  props.mailData.elements.map((element, key) => (
                    element instanceof (TitleElement)
                      ? <Title key={key} title={element.Title}/>
                      : element instanceof (BigImageElement)
                        ? <BigImage key={key} address={element.Address} imageUrl={element.ImageUrl}
                                    is_builtLetter={props.is_builtLetter}/>
                        : element instanceof (BadgesElement)
                          ? <Badges key={key} is_builtLetter={props.is_builtLetter} badges={element.Badges}/>
                          : element instanceof (ParagraphElement)
                            ? <Paragraph key={key} is_builtLetter={props.is_builtLetter} text={element.Text}/>
                            : element instanceof (ProductCardElement)
                              ? <ProductCard key={key}
                                             text={element.Text}
                                             title={element.Title}
                                             buttonUrl={element.ButtonUrl}
                                             buttonText={element.ButtonText}
                                             imageUrl={element.ImageUrl}
                                             age={element.Age}
                                             amountOfDays={element.AmountOfDays}
                                             metroName={element.MetroStation ? element.MetroStation.name : 'метро'}
                                             metroImageUrl={element.MetroStation ? element.MetroStation.imageUrl : ''}
                                             periods={element.Periods}
                                             is_builtLetter={props.is_builtLetter}
                              /> : element instanceof (HighlightedParagraphElement)
                                ? <HighlightedParagraph key={key} is_builtLetter={props.is_builtLetter}
                                                        text={element.Text}/>
                                : element instanceof (ButtonElement)
                                  ? <ButtonCustom key={key}
                                                  buttonUrl={element.ButtonUrl}
                                                  buttonText={element.ButtonText}
                                                  buttonAlign={element.ButtonAlign}
                                                  is_builtLetter={props.is_builtLetter}/>
                                  : <></>
                  ))
                }
                <Footer is_builtLetter={props.is_builtLetter}/>
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

