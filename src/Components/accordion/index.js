import { useEffect } from "react";
import "./styles.css";

/*In this section I create an FAQ-Accordion that the user can interact with to learn more information*/ 
export default function Accordion() {
    useEffect(()=> {
        const accButtons = document.querySelectorAll('.accordion');
        accButtons.forEach(button=>{
            button.addEventListener("click", function(){
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if(panel.style.display=="block"){
                    panel.style.display = "none";
                }
                else {
                    panel.style.display = "block";
                }
            });
        });
    });
    return (
        <><h2 className="accordion-title">FAQs zum agilen Festpreis</h2><button className="accordion">Woher kommt der agile Festpreis?</button><div className="panel">
            <p> Der Agile Festpreis wurde extra für die Umsetzung von IT-Projekten entwickelt, eine genaue Herkunft ist 
            aber strittig, meistens wird vom "Agile Manifesto" aus 2001 ausgegangen </p>
        </div><button className="accordion">Welche anderen Haupt-Vertragsformen gibt es?</button><div className="panel">
                <p> Die Haupt-Modelle sind der Festpreis, der agile Festpreis und die Umsetzung nach Aufwand, auch Time & Material genannt.</p>
            </div><button className="accordion">Wie kann man Anforderungen unterteilen?</button><div className="panel">
                <p>Klassischerweise kann man Anforderungen in Features, Userstories und Tasks 
                unterteilen. Optimalerweise sollen Tasks nicht größer als 8h Umsetzungsaufwand sein.</p>
            </div></>
    );
};