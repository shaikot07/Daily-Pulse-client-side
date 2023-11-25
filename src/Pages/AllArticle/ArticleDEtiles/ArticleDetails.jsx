import { Link, useParams } from "react-router-dom";
import useArticle from "../../../hooks/useArticle";


const ArticleDetails = () => {
      const { id } = useParams()
      const [article] = useArticle()
      const foundData = article.find((item) => item._id == id);
      console.log(foundData);
      const { title, image, publisher, postedDate, viewCount, articleAuthorEmail, tags, description, articalAuthorPhoto, articleAuthorName, _id } = foundData || {}
      return (
            <div className="mt-20 mb-20 max-w-[41rem] mx-auto">
                  <div className="relative flex max-w-[650px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                              <img className='rounded-lg'
                                    src={image}
                                    alt="ui/ux review check"
                              />
                        </div>
                        <div className="p-6">
                              <div className="flex justify-between">
                                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#E31C25] ">
                                          <span className='text-black'>Title:</span>  {title}
                                    </h4>
                                    <h2>Author Email : {articleAuthorEmail}</h2>
                              </div>

                              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    {description}
                              </p>
                              <div className="flex items-center justify-between">
                                    <div>
                                          <h2 className='text-2xl mt-4 text-[#E31C25]'><span className='text-black'>Publisher: {publisher}</span> </h2>
                                          <p className="mt-2">{tags?.map((tag, index) => (index === tags.length - 1 ? tag : `${tag}, `))}</p>
                                    </div>
                                    <div>
                                          <p> Posted Date : {postedDate}</p>
                                          <p>View{viewCount}</p>
                                    </div>
                              </div>
                        </div>
                        <div className="flex items-center justify-between p-6">
                              <div className="flex items-center gap-4">
                                    <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={articalAuthorPhoto} />
                                    <h2 className='text-2xl font-bold text-[#E31C25] '>{articleAuthorName}</h2>

                              </div>

                        </div>
                        <div className=' ml-5'>
                              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">

                              </p>
                        </div>
                        <div className=' mx-auto mt-5 mb-3'>
                              <Link to="/allarticles">
                                    <button className="bg-red-700 p-3 text-white rounded-lg hover:bg-black"> Go Back Home </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default ArticleDetails;