import {Pie} from 'vue-chartjs'
export default{
    extends:Pie,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Sales',
              data: [400, 300,150,100],
              backgroundColor:['aqua','lightgreen','red','orange'],
            }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Pie Chart',
                fontColor:'Black',
                fontSize:15

            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 10
              }
          }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}