import React, { useEffect, useState } from 'react';

const Moadle = () => {


      const [showModal, setShowModal] = useState(false);

      useEffect(() => {
            // Set a timeout to show the modal after 10 seconds
            const timeoutId = setTimeout(() => {
                  setShowModal(true);
            }, 10000); // 10 seconds

            // Clear the timeout if the component unmounts before 10 seconds
            return () => clearTimeout(timeoutId);
      }, []);
      return (
            <div>


                  <div>
                        {/* Modal toggle */}
                        <button
                              data-modal-target="static-modal"
                              data-modal-toggle="static-modal" // This attribute should match the target
                              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="button"
                        >
                              Toggle modal
                        </button>

                        {/* Main modal */}
                        {showModal && (
                              <div
                                    id="static-modal"
                                    data-modal-backdrop="static"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                              >
                                    {/* Modal content */}
                                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                                          {/* Modal content */}
                                          {/* ... Your existing modal content ... */}
                                    </div>
                              </div>
                        )}
                  </div>

            </div>
      );
};

export default Moadle;