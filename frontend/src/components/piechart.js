import React, {useEffect, useState} from 'react'
import PieChart from 'highcharts-react-official'
import ColumnChart from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock'

function CustomPieChart(props) {
  const [pieChartData, setPieChartData] = useState({})
  const [columnChartData, setColumnChartData] = useState({})

  useEffect(() => {
    const pieData = {
      chart: {
        type: 'pie',
      },
      series: [
        {
          name: 'Tasks',
          colorByPoint: true,
          data: props.pieChartData
        },
      ],
    }

    const columnData = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Division of Task per category',
      },
      xAxis: {
        categories: ['PERSONAL', 'WORK', 'SHOPPING', 'OTHERS'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Tasks',
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              'gray',
          },
        },
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'New',
          data: props.ColumnChartNew,
        },
        {
          name: 'In Progress',
          data: props.ColumnChartInprogress,
        },
        {
          name: 'Completed',
          data: props.ColumnChartCompleted,
        },
      ],
    }
    setPieChartData(pieData)
    setColumnChartData(columnData)
  }, [props.pieChartData, props.ColumnChartNew, props.ColumnChartInprogress, props.ColumnChartCompleted])

  console.log(props.pieChartData.completed_task)
  console.log(pieChartData)

  return (
    <div>
      <h2>DATA</h2>
      <PieChart options={pieChartData} />
      <ColumnChart highcharts={Highcharts} options={columnChartData} />
    </div>
  )
}

export default CustomPieChart
