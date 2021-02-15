import '../css/style.css';
import '../css/faq.css';
import img1 from '../../assets/images/mainphoto.svg';
import img2 from '../../assets/images/aleksey.png';
import img3 from '../../assets/images/denis.png';
import img4 from '../../assets/images/irina.png';
import img5 from '../../assets/images/ivan.png';
import img6 from '../../assets/images/maria.png';
import img7 from '../../assets/images/nikalay.png';
import img8 from '../../assets/images/question.png';
import icon1 from '../../assets/icons/facebook.svg';
import icon2 from '../../assets/icons/instagram.svg';
import icon3 from '../../assets/icons/vk.svg';



let question = document.getElementsByClassName("section-faq__wrapper-btn");
       let answer = document.getElementsByClassName("section-faq__wrapper-content");
       let i;

       for(i=0; i < question.length; i++) {
           question[i].addEventListener("click", function () {
                this.classList.toggle("is-active");  
                this.firstElementChild.classList.remove("fa-angle-down");
                this.firstElementChild.classList.add("fa-angle-up");

                let content = this.nextElementSibling;

                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    this.firstElementChild.classList.add("fa-angle-down");
                    this.firstElementChild.classList.remove("fa-angle-up");
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
           });
       }