import React from 'react';

const Payment = () => {
      return (
            <div className='max-w-6xl mx-auto'>
                  <div 
                        className="relative w-screen max-w-sm border mx-auto mt-20 mb-10 border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                        aria-modal="true"
                        role="dialog"
                        tabIndex="-1"
                  >
                        <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                              <span className="sr-only">Close cart</span>

                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M6 18L18 6M6 6l12 12"
                                    />
                              </svg>
                        </button>

                        <div className="mt-4 space-y-6">
                              

                              <div className="space-y-4 text-center">
                                    <a
                                          href="#"
                                          className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                                    >
                                         Type your Card Number
                                    </a>

                                    <a
                                          href="#"
                                          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                    >
                                          Checkout
                                    </a>

                                    <a
                                          href="/"
                                          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                                    >
                                          Back To Home
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Payment;