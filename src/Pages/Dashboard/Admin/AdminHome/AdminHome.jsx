
import { useEffect, useState } from 'react';
import useArticle from '../../../../hooks/useArticle';
import usePublisher from '../../../../hooks/usePublisher';
import Chart from 'react-google-charts';


const AdminHome = () => {

      const [article,] = useArticle();
      // console.log("this is article",article);
      const [publisher] = usePublisher();
      // console.log("this is article",publisher);
      const data = [
            ["Task", "Hours per Day"],
            ["National Geographic", 3],
            ["Business Trends", 4],
            ["Science Daily", 3],
            ["Tech Innovations", 2],

      ]

      const options = {
            title: 'Article Distribution by Publication..',
      };

      return (
            <div>
                  <div>
                        
                        <Chart
                              chartType="PieChart"
                              data={data}
                              options={options}
                              width={"100%"}
                              height={"400px"}
                        />
                  </div>
                  <div>
                        {/* Barchart  */}

                        <Chart
                              chartType="BarChart"
                              width="100%"
                              height="400px"
                              data={data}
                              options={options}
                        />
                  </div>
                  <div>
                        {/* Line chart  */}

                        <Chart
                              chartType="LineChart"
                              width="100%"
                              height="400px"
                              data={data}
                              options={options}
                        />
                  </div>
            </div>
      );
};

export default AdminHome;
