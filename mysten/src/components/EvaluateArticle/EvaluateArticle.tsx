
import StarGradeConteiner from '../StarGradeConteiner/StarGradeConteiner';
import './EvaluateArticle.scss';



function EvaluateArticle() {
    return ( 
        <section className='evaluate-article'>
            <div className='evaluate-conteiner'>
                <p>How helpful was this article?</p>
                <StarGradeConteiner/>
            </div>
        </section>
    );
}

export default EvaluateArticle;