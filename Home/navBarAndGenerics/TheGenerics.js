import { Button, Card } from "react-bootstrap";
import image from '../../StorePage/Images/playButton.png'
function TheGeneric(){
    return(
        <Card style={{height:'auto',backgroundColor:'rgb(101,101,142)'}} className="bg mt-1 justify-content-center align-items-center text-light shadow lg p-3 mb-5">
            <h1 className="font-monospace" style={{fontSize:'75px'}}>The Generics</h1>
            <Button size='lg' variant='outline-info' style={{color:'white'}}>Get Our Latest Album</Button>
            <button className="btn btn-rounded btn-outline" style={{paddingTop:'10px'}}><img src={image} style={{width:'100px',height:'auto'}}/></button>
        </Card>
    )
}
export default TheGeneric;