import { useEffect, useState } from "react";
import { Button, ButtonGroup, CloseButton, Form, Modal, ModalBody } from 'react-bootstrap'
import Url from "./url";
import axios from "axios"
import { redirect } from "react-router-dom";
import logo from '../images/logo.png';


function Header() {

    const [popup, setpopup] = useState(false)
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [location, setlocation] = useState('');
    const [description, setdescription] = useState('');
    const [imageUrls, setimageUrls] = useState([]);
    const [features, setFeatures] = useState([]);
    const [author, setauthor] = useState();

    const primary = '#FBF5F3'
    const secondary = '#FBF5F3'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

    const list = [1,2,3,4,5,6,7,8,9,10]

////////////////////////////////////////////////////////////////

    useEffect(() =>{
        let userid = localStorage.getItem('userid')
        userid ? setauthor(userid) : setauthor('')
    })

    const addToList = (e) =>{
        let name = e.target.name
        console.log(e.target.checked)
        e.target.checked ? setFeatures([...features,name]) : features.pop()
    }

 
const handleUpload = async (event) => {
    const files = event.target.files;

    // Create an array to store the uploaded image URLs

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Create a new FormData object
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'taprent');

      try {
        // Make the POST request to Cloudinary
        const response = await axios.post('https://api.cloudinary.com/v1_1/djpaffvsj/image/upload', formData);

        // Retrieve the URL of the uploaded image
        const imageUrl = response.data.url;
        setimageUrls([...imageUrls, imageUrl]);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // Log the image URLs
    imageUrls.forEach((url, index) => {
      console.log(`Image ${index + 1}: ${url}`);
    });
  };

  
  onsubmit = async (e) => {
      e.preventDefault()
      let uid = await localStorage.getItem('userid')
      let telephone = await localStorage.getItem('tel')
      axios.post(`${Url}posts`,{
          title: title,
          price: price,
          location: location,
          features: features,
          description: description,
          photos: imageUrls,
          telephone:telephone,
          author :uid
      },).then((res) =>{
          setpopup(false)
          redirect('/')
      }).catch(err => console.error(err))
        console.log(imageUrls)
        
    }

    return (
        <>

            {/* modal for upload */}
            
            <Modal
            centered
            backdrop="static"
            size="lg"
            show={popup}
            >
                <Modal.Header>
                    Uplaod For Rent
                    <CloseButton onClick={() => {setpopup(false);setFeatures([])}}  />
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Control onChange={handleUpload} type="file" />
                        <Form.Control onChange={handleUpload} type="file" />
                        <Form.Control onChange={handleUpload} style={{marginBottom:'2%'}} type="file" />
                        
                        <Form.Control placeholder="Title" style={{marginBottom:'2%'}} onChange={(e) =>{settitle(e.target.value)}}/>
                        <div style={{width:'100%',display:"flex", justifyContent:'space-evenly'}}>
                            <Form.Control style={{marginBottom:'2%'}} type="number" placeholder="Price" onChange={(e) =>{setprice(e.target.value)}} />
                            <Form.Control style={{marginBottom:'2%'}} placeholder="Ghs/Montly" disabled />
                        </div>
                        <Form.Control style={{marginBottom:'2%'}} placeholder="Location" onChange={(e) =>{setlocation(e.target.value)}} />
                        <div className="d-flex mb-2">
                            <Form.Select >
                                <option>Number of Bed rooms</option>
                                {list.map((numberOfRoom) =>(
                                    <option>
                                        {numberOfRoom}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Select >
                                <option>Number of Bath rooms</option>
                                {list.map((numberOfRoom) =>(
                                    <option>{numberOfRoom}</option>
                                ))}
                            </Form.Select>
                        </div>

                        <Form.Control style={{marginBottom:'2%', minHeight:'30vh'}} placeholder="discription" size="lg" as="textarea" onChange={(e) =>{setdescription(e.target.value)}}/>
                        
                        <Modal.Footer>
                        <ButtonGroup>
                            <Button variant="secondary" onClick={() =>{setpopup(false)}}>Cancel</Button>
                            <Button type="submit"> Upload</Button>
                        </ButtonGroup>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* header */}

            <header style={{ marginBottom:'2%'}} className=" d-flex p-4 justify-content-between">
                <a href="/" style={{display:'flex', width:'15%'}}>
                    <img id="headimg" src={logo} alt="" style={{aspectRatio:1/1, width:'80%'}} />
                </a>
                <div id="searchBar">
                <input placeholder="search" type="text"/><button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="d-flex">
                    <Button onClick={() => {setpopup(true)}} style={{height :'100%'}} variant="ouline"><i className="fa fa-upload"></i></Button>
                    <Button id='profilebtn' style={{height :'100%'}} variant='outline' href='/profile' ><i className="fa fa-user"></i></Button>
                </div>
            </header>
        </>
    );
}

export default Header;