import Chart from 'react-apexcharts'

export default function () {
  // const series = [
  //   {
  //     name: "Temperature in Fahrenheit", //will be displayed on the y-axis
  //     data: [43, 53, 50, 57]
  //   }
  // ];
  // const options = {
  //   chart: {
  //     id: "pie"
  //   },
  //   xaxis: {
  //     categories: [1, 2, 3, 4] //will be displayed on the x-asis
  //   }
  // };
  options = {
    chart: {
      type: 'donut'
    },
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
  }
  return (
    <div>
      <Chart options={options} type="pie" series={series} width="40%" />
    </div>
  );
}