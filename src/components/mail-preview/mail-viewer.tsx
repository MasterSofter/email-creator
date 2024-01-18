import React from 'react';
import Logo from './components/logo/logo';
import Title from './components/title/title';
import {
  AboutElement,
  BadgesElement,
  BigImageElement,
  MailData,
  ParagraphElement,
  SignUpElement,
  TitleElement
} from '../../types/types';
import {BigImage} from './components/bigimage/bigimage';
import {Paragraph} from './components/paragraph/paragraph';
import InfoItemSignUp from './components/info-item-sign-up/info-item-sign-up';
import InfoItemAbout from './components/info-item-about/info-item-about';
import Footer from './components/footer/footer';
import Badges from './components/badges/badges';

type Props = {
  mailData: MailData;
  is_builtLetter: boolean;
}

export default function MailViewer({mailData, is_builtLetter}: Props): React.JSX.Element {
  return (
    <table width='100%' cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse:'collapse',fontFamily: 'Helvetica, sans-serif, Arial', color: 'black', fontSize:'14px'}}>
      <tbody>
      <tr style={{verticalAlign:'top'}}>
        <td>
          <table width='100%' align='center' cellSpacing='0' cellPadding='0' border={0} style={{borderCollapse:'collapse', maxWidth:'510px'}}>
            <tbody>
              <tr style={{verticalAlign:'top'}}>
                <td>
                  <Logo is_builtLetter={is_builtLetter}/>
                  {
                    mailData.elements.map((element, key) => (
                      element instanceof (TitleElement)
                        ? <Title key={key} title={element.Title}/>
                        : element instanceof (BigImageElement)
                          ? <BigImage key={key} address={element.Address} imageUrl={element.ImageUrl} is_builtLetter={is_builtLetter}/>
                          : element instanceof (BadgesElement)
                            ? <Badges key={key} is_builtLetter={is_builtLetter} badges={element.Badges}/>
                            : element instanceof (ParagraphElement)
                              ? <Paragraph key={key} is_builtLetter={is_builtLetter} text={element.Text}/>
                              : element instanceof (SignUpElement)
                                ? <InfoItemSignUp key={key}
                                                  text={element.Text}
                                                  title={element.Title}
                                                  buttonUrl={element.ButtonUrl}
                                                  imageUrl={element.ImageUrl}
                                                  age={element.Age}
                                                  amountOfDays={element.AmountOfDays}
                                                  metroImageUrl={element.MetroStation ? element.MetroStation.imageUrl : ''}
                                                  periods={element.Periods}
                                                  is_builtLetter={is_builtLetter}
                                /> : element instanceof (AboutElement)
                                  ? <InfoItemAbout key={key} is_builtLetter={is_builtLetter} text={element.Text}/>
                                  : <></>
                    ))
                  }
                  <Footer is_builtLetter={is_builtLetter}/>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>








      { /*
          mailData.elements.map((element, key) => (
            element instanceof (TitleElement)
              ? <Title key={key} title={element.Title}/>
              : element instanceof (BigImageElement)
                ? <BigImage key={key} address={element.Address} imageUrl={element.ImageUrl} is_builtLetter={is_builtLetter}/>
                : element instanceof (BadgesElement)
                  ? <Badges key={key} is_builtLetter={is_builtLetter} badges={element.Badges}/>
                  : element instanceof (ParagraphElement)
                    ? <Paragraph key={key} is_builtLetter={is_builtLetter} text={element.Text}/>
                    : element instanceof (SignUpElement)
                      ? <InfoItemSignUp key={key}
                                        text={element.Text}
                                        title={element.Title}
                                        buttonUrl={element.ButtonUrl}
                                        imageUrl={element.ImageUrl}
                                        age={element.Age}
                                        amountOfDays={element.AmountOfDays}
                                        metroImageUrl={element.MetroStation ? element.MetroStation.imageUrl : ''}
                                        periods={element.Periods}
                                        is_builtLetter={is_builtLetter}
                      /> : element instanceof (AboutElement)
                        ? <InfoItemAbout key={key} is_builtLetter={is_builtLetter} text={element.Text}/>
                        : <></>
          ))
        */}

      </tbody>
    </table>
  );
}
