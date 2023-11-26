import { Helmet } from "react-helmet-async";
import useArticle from "../../../../hooks/useArticle";
import AdminAllArticleDitales from "./AdminAllArticleDitales";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";

const AdminAllArticlePage = () => {
      const [article] = useArticle();
      // nicer 4 ta state infiniti loop ar jonno 
      const [showLoader, setShowLoader] = useState(false);
      const [filteredData, setFilteredData] = useState([]);
      const [page, setPage] = useState(1);

      const itemParPage = 4;
      // infiniti loop ar kaj 
      const fetchMoreData = () => {
            const newData = article.slice(0, page * itemParPage);
            setFilteredData(newData);
            setPage(page + 1);
      };

      useEffect(() => {
            fetchMoreData();
            setShowLoader(true)
      }, []);
      return (
            <div>
                  <div>
                        <Helmet>
                              <title>DailyPulse ||Admin All Article</title>
                        </Helmet>
                  </div>

                  <InfiniteScroll
                        dataLength={filteredData.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                  >
                        <div className='grid gird-col-1 md:grid-cols-3 mt-8 gap-12'>
                              {
                                    article.map(data => <AdminAllArticleDitales
                                          key={data._id}
                                          data={data}
                                    ></AdminAllArticleDitales>)
                              }
                        </div>
                  </InfiniteScroll>
            </div>
      );
};

export default AdminAllArticlePage;