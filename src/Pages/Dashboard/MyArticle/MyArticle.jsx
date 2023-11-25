import React from 'react';
import useAddArticle from '../../../hooks/useAddArticle';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const MyArticle = () => {
      const [addArticle] = useAddArticle()
      console.log(addArticle);
      return (
            <div>
                  <div className="overflow-x-auto">
                        <table className="table w-full">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                #
                                          </th>
                                          <th>Image</th>
                                          <th>Article Title</th>
                                          <th>Details </th>
                                          <th>Status</th>
                                          <th>isPremium</th>
                                          <th>update</th>
                                          <th>Delete</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          addArticle.map((item, index) => <tr key={item._id}>
                                                <td>
                                                      {index + 1}
                                                </td>
                                                <td>
                                                      <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                  <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>
                                                      {item.title}
                                                </td>
                                                <td className="">
                                                      <button className='bg-red-700 text-white p-2 rounded-lg hover:bg-black'>Details</button>
                                                </td>
                                                <td>
                                                      {item.status}
                                                </td>
                                                <td>
                                                      {item.isPremium?"True" : "False"}
                                                </td>
                                                <td>
                                                      <Link to={`/dashboard/updateArticle/${item._id}`}>
                                                            <button
                                                                  className="btn btn-ghost btn-lg bg-orange-500">
                                                                  <FaEdit className="text-white"></FaEdit>
                                                            </button>
                                                      </Link>
                                                </td>
                                                <td>
                                                      <button
                                                            onClick={() => handleDeleteItem(item)}
                                                            className="btn btn-ghost btn-lg">
                                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                                      </button>
                                                </td>
                                          </tr>)
                                    }
                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default MyArticle;