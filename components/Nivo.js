// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import data from './data';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', stacked: false, min: 0 }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        tooltip={({point}) => {
            return <div style={{padding:'8px',background:"white",boxShadow:'4px 4px 4px #888'}}>
                    <div><strong>Unit:</strong> {point.data.x}</div>
                    <div><strong>Cost:</strong> Rs {point.data.y}</div>
                     {/* {JSON.stringify(point)} */}
                </div>;
          }}
        axisRight={{
            // tickValues: [
            //     0,
            //     500,
            //     1000,
            //     1500,
            //     2000,
            //     2500
            // ],
            // tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
            tickValues: [
                0,
                100,
                200,
                500,
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'price',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: [
                0
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enablePoints={false}
        enableArea={false}

        colors={{ scheme: 'nivo' }}
        lineWidth={7}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        // gridXValues={[ 0, 20, 40, 60, 80, 100, 120 ]}
        // gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 12,
                itemDirection: 'left-to-right',
                itemWidth: 91,
                itemHeight: 10,
                itemOpacity: 0.75,
                symbolSize: 7,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default function Nivo(){
    return <MyResponsiveLine data={data}/>
}