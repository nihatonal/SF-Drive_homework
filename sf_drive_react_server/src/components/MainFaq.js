import * as React from "react";

import "../styles/MainFaq.css";

import question from '../assets/images/question.png';

import Accordion from "./Accordion";

function MainFaq(props) {
    
    return (
        <main>   
            <section className={"section-main content_wrapper"}>
                <img src={question} alt={"question"}/>
                <h1 className={"section-main__title"}>Частые вопросы</h1>
                <p className={"section-main__desc"}>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </section>
            <Accordion />
            {/* <section class="section-faq content_wrapper">
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Могу ли я отменить бронь?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">Каждый раз, когда гость совершает бронирование, оно подтверждается мгновенно — вы не можете его отклонить.</p>
                    </div>
                </div>
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Могу ли я вернуть деньги, если не подошёл автомобиль?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">При определенных обстоятельствах и условиях Вы можете вернуть автомобиль в салон и требовать возмещения в денежном виде всех издержек связанных с приобретением и эксплуатацией автомобиля или обменять некачественную машину на новую согласно закону "О защите прав потребителей".</p>
                    </div>
                </div>
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Что делать, если случилось ДТП?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">Oстановить транспортное средство, включить аварийку, выставить знак аварийной остановки, чтобы предупредить других водителей об опасности. Знак устанавливается на расстоянии не менее 15 метров от ДТП в населенных пунктах и не менее 30 метров за их пределами. Неисполнение этих требований влечет административное наказание — предупреждение или штраф в размере 1000 рублей.</p>
                    </div>
                </div>
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Могу ли я оставить автомобиль в удобном для меня месте?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
                    </div>
                </div>
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Что делать, если собственник просит заплатить ему напрямую?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">Если объявление о продаже квартиры размещено собственником в открытых источниках, риелтору платят только за проведение сделки по взаимному соглашению.</p>
                    </div>
                </div>
    
                <div class="section-faq__wrapper">
                    <button class="section-faq__wrapper-btn">Должен ли я заправлять автомобиль?<i class='fa fa-angle-down'></i></button>
                    <div class="section-faq__wrapper-content">
                        <p class="section-faq__wrapper-text">Расходы на топливо всегда формально несёт компания, у которой вы берёт автомобиль в аренду. Эти траты заложены в стоимость поминутной аренды.</p>
                    </div>
                </div>
            </section>   */}
        </main>
    );
}       


export default MainFaq;