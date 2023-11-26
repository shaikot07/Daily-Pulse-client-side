import useArticle from "../../../../hooks/useArticle";
import AdminAllArticleDitales from "./AdminAllArticleDitales";


const AdminAllArticlePage = () => {
      const [article]=useArticle()
      return (
            <div>
                  
                  {
                        article.map(data =><AdminAllArticleDitales
                               key={data._id}
                               data={data}
                        ></AdminAllArticleDitales>)
                  }
            </div>
      );
};

export default AdminAllArticlePage;