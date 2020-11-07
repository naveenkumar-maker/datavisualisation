import React from 'react'
import {Line} from 'react-chartjs-2';
function Charts() {
    const data={
        labels:['Mat','inns','No','Runs','Hs','Ave','BF','sr','100','50','4s','6s','ct','st'],
        datasets:[
           {
               label:'Tests',
               data:[90,144,16,4876,224,38.09,8249,59.11,6,33,544,78,256,38],
               borderColor:['rgba(0, 194, 9, 0.9)'],
               backgroundColor:['rgba(0, 194, 9, 0.4)'],
               pointBackgroundColor:'rgba(0, 194, 9, 0.9)',
               pointBorderColor:'rgba(0, 194, 9, 0.9)'
           },
           {
               label:'ODIs',
               data:[350,297,84,10773,183,50.57,12303,87.56,10,73,826,229,321,123],
               borderColor:['rgba(247, 61, 163, 0.9)'],
               backgroundColor:['rgba(247, 61, 163, 0.4)'],
               pointBackgroundColor:'rgba(247, 61, 163, 0.9)',
               pointBorderColor:'rgba(247, 61, 163, 0.9)',
           },
             {
              label:'T20Is',
              data:[98,85,42,1617,56,37.60,1282,126.13,0,2,116,52,57,34],
              borderColor:['rgba(247, 0, 255, 0.9)'],
              backgroundColor:['rgba(247, 0, 255, 0.4)'],
              pointBackgroundColor:'rgba(247, 0, 255, 0.9)',
              pointBorderColor:'rgba(247, 0, 255, 0.9)',

           },
           {
            label:'First-class',
            data:[131,210,19,7038,224,36.84,0,0,9,47,0,0,364,57],
            borderColor:['rgba(85, 0, 246, 0.9)'],
            backgroundColor:['rgba(85, 0, 246, 0.4)'],
            pointBackgroundColor:'rgba(85, 0, 246, 0.9)',
            pointBorderColor:'rgba(85, 0, 246, 0.9)'
           },
           {
            label:'ListA',
            data:[423,364,99,13353,183,50.38,0,0,			17,87,0,0,402,141],
            borderColor:['rgba(217, 250, 0, 0.9)'],
            backgroundColor:['rgba(217, 250, 0, 0.4)'],
            pointBackgroundColor:'rgba(217, 250, 0, 0.9)',
            pointBorderColor:'rgba(217, 250, 0, 0.9)'

           },
           {
            label:'T20s',
            data:[331,295,121,6821,84,39.20,5054,134.96,0	,27,467,302,185,84],
            borderColor:['rgba(217, 0, 0, 0.9)'],
            backgroundColor:['rgba(217, 0, 0, 0.4)'],
            pointBackgroundColor:'rgba(217, 0, 0, 0.9)',
            pointBorderColor:'rgba(217, 0, 0, 0.9)'

           } 
            
        ]
    }
    const options={
        title:{
            display:true,
            text:'Batting and fielding averages'
            
        },
    
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:13500,
                        stepSize:500
                    }
                }
            ]
        }
    }
    return (
        <div>
           <Line  data={data} options={options}/> 
        </div>
    )
}

export default Charts
