
import Options from './Options';

const TimeOptions = (props) => {
    let options=[{
        "id":0,
        "name":9
    },
    {
        "id":1,
        "name":10
    },
    {
        "id":2,
        "name":11
    },
    {
        "id":3,
        "name":12
    }
]
    return (
        <Options options={options} title={"time"} />
    );
  };
  
  export default TimeOptions;