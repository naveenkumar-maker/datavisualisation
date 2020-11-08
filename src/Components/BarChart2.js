import React from 'react'
import {Bar} from 'react-chartjs-2';
function BarChart2() {
    const data={
        labels:['Mat','inns','No','Runs','Hs','Ave','BF','sr','100','50','4s','6s','ct','st'],
        datasets:[
           {
               label:'Tests',
               data:[90,7,96,67,0,0,0,4.18,0,0,0,0],
               backgroundColor:[
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                'rgba(0, 194, 9, 0.9)',
                ],
               },
           {
               label:'ODIs',
               data:[350,2,36,31,1,1/14,1/14,31.00,5.16,36.0,0,0],
              backgroundColor:[
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                'rgba(247, 61, 163, 0.9)',
                ],
               },
             {
              label:'T20Is',
              data:[98,0,],
              backgroundColor:[
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                  'rgba(247, 0, 255, 0.9)',
                ],
             },
           {
            label:'First-class',
            data:[131,0,126,87,0,0,0,0,4.14,0,0,0,0],
            backgroundColor:[
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                'rgba(85, 0, 246, 0.9)',
                ],
             },
           {
            label:'ListA',
            data:[423,0,63,53,2,1/14,1/14,26.50,5.04,31.5,0,0,0],
           backgroundColor:[
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
            'rgba(217, 250, 0, 0.9)',
          ],
          },
           {
            label:'T20s',
            data:[331,1,12,25,0,0,0,0,12.50,0,0,0,0],
            backgroundColor:[
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                'rgba(217, 0, 0, 0.9)',
                ],
            } 
         ]
    }
    const options={
        title:{
            display:true,
            text:'Bowling averages'
            
        },
    
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:450,
                        stepSize:30
                    }
                }
            ]
        }
    }
    return (
        <div>
           <Bar  data={data} options={options}/> 
        </div>
    )
}

export default BarChart2
