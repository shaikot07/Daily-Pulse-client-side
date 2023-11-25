import React from 'react';
import useArticle from '../../../hooks/useArticle';
import PremiumArticleDetails from './PremiumArticleDetails';

const PremiumArticles = () => {
      const [article]=useArticle();
      console.log(article);
      const premiumArticles = article.filter(article => article.isPremium)
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {
                        premiumArticles.map((data,indx) =><PremiumArticleDetails key={indx} data={data}></PremiumArticleDetails>)
                  }
            </div>
      );
};

export default PremiumArticles;