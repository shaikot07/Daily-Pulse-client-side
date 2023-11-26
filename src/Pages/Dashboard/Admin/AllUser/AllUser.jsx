import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
      const axiosSecure = useAxiosSecure();
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get('/users');
                  return res.data;
            }
      })
      console.log(users);
      const handleMakeAdmin = user => {
            axiosSecure.patch(`/users/admin/${user._id}`)
                  .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                              refetch();
                              Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "make admin successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                  })
      }
      return (
            <div>

                  <div className='flex justify-evenly my-4'>
                        <h2 className='text-3xl'>All Users</h2>
                        <h2 className='text-3xl'>Total Users {users.length} </h2>
                  </div>
                  <div className="overflow-x-auto">
                        <table className="table table-zebra">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Profile Image</th>
                                          <th>Role</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          users.map((user, index) => <tr key={user._id}>
                                                <th>{index + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                      <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                  <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={user.image} alt="No Image" />
                                                                  </div>
                                                            </div>
                                                            
                                                      </div>
                                                </td>
                                                <td>
                                                      {
                                                            user.role === 'admin' ? 'Admin' : <button
                                                                  onClick={() => handleMakeAdmin(user)}
                                                                  className='btn btn-ghost btn-sm bg-orange-500 text-white'>
                                                                  {/* <FaUser className='text-white'></FaUser> */}
                                                                  make Admin
                                                            </button>
                                                      }
                                                </td>
                                                <td>
                                                      <button
                                                            // onClick={() => handleDeleteUser(user)}
                                                            className='btn btn-ghost btn-lg'>
                                                            <FaTrashAlt className='text-red-600'></FaTrashAlt>
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

export default AllUser;