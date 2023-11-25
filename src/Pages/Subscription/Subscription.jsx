import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PriceCartForSubscription from "../../Component/PriceCartForSubscription";


const Subscription = () => {
      const [subscriptionPeriod, setSubscriptionPeriod] = useState('');
      const [message, setMessage] = useState('');

      const handleSubscriptionChange = (event) => {
            setSubscriptionPeriod(event.target.value);
      };

      const handleSubscribe = async ({ userId }) => {
            if (!subscriptionPeriod) {
                  setMessage('Please select a subscription period.');
                  return;
            }

            try {
                  const response = await fetch('/subscribe', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              userId,
                              subscriptionPeriod,
                        }),
                  });

                  const data = await response.json();

                  if (response.ok) {
                        setMessage(`Subscription successful. Premium membership until ${data.subscriptionEndDate}`);
                  } else {
                        setMessage(`Subscription failed. ${data.message}`);
                  }
            } catch (error) {
                  console.error('Error subscribing:', error);
                  setMessage('Internal server error.');
            }
      };
      return (
            <div className="max-w-6xl mx-auto ">
                  <div>
                        <Helmet>
                              <title>DailyPulse || Subscription</title>
                        </Helmet>
                  </div>
                  <div>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/2SqK3Bw/05.webp)' }}>
                              <div className="hero-overlay bg-opacity-60"></div>
                              <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                          <h1 className="mb-5 text-5xl font-bold">Daily Pulse news</h1>
                                          <p className="mb-5">The Papers <br />
                                                A detailed round-up of the main stories covered in the UK’s national newspapers – including a look at the front pages and expert reviews on the BBC News Channel.</p>
                                          <button className="btn btn-primary bg-[#B80000] border-0 hover:bg-black">Get Started</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div>
                        <div><h4 className="text-4xl font-bold mt-10 mb-4 text-center">Buy The Subscription</h4></div>
                        <div className="h-[5px] w-[300px] mx-auto bg-[#B80000] mb-10"></div>
                        <div className="bg-slate-500 p-4 w-1/2 mx-auto">
                              <select value={subscriptionPeriod} onChange={handleSubscriptionChange} className="p-2">
                                    <option value="">Select Subscription Period</option>
                                    <option value="1">1 minute</option>
                                    <option value="5">5 days</option>
                                    <option value="10">10 days</option>
                              </select>
                              <button onClick={handleSubscribe} className="bg-[#B80000] text-white py-2 px-4 rounded-lg hover:bg-black">Subscribe</button>
                              {message && <p>{message}</p>}
                        </div>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                              <PriceCartForSubscription plan='Free' taka='0' time="1 Minute"></PriceCartForSubscription>
                              <PriceCartForSubscription plan='Premium' taka='450' time="15 Day"></PriceCartForSubscription>
                              <PriceCartForSubscription plan='Gold' taka='1500' time="1 Month"></PriceCartForSubscription>
                        </div>
                  </div>
                  subscription page 
            </div>
      );
};

export default Subscription;