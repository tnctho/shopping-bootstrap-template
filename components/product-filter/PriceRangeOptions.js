import React from 'react'
import { Button } from 'react-bootstrap'

const options = [
    "DƯỚI 55K",
    "55K ~ 100K",
    "100K ~ 250K",
    "250K ~ 500K"
]
class PriceRangeOptions extends React.Component {
    render(){
        return(
            <div>
                {options.map(item=><Button variant="light" key={item} style={styles.button} size='sm'>{item}</Button>)}
            </div>
        )
    }
}

const styles = {
    button: {
        margin: "5px 5px 0px 0px" 
    }
}
export default PriceRangeOptions