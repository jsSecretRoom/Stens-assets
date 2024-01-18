import GradeArticleComponent from '../BlogComponent/GradeArticleComponent/GradeArticleComponent';
import './EvaluateArticle.scss';



function EvaluateArticle() {
    return ( 
        <section className='evaluate-article'>
            <div className='evaluate-conteiner'>
                <p>How helpful was this article?</p>
                <GradeArticleComponent/>
            </div>
        </section>
    );
}

export default EvaluateArticle;