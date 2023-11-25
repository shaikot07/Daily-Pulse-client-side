import { Helmet } from "react-helmet-async";


const Subscription = () => {
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
                  subscription page
            </div>
      );
};

export default Subscription;