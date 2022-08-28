import React, { useState } from 'react'
import {Container, Row, Col} from 'reactstrap'
import CommonSection from '../components/ui/Common-section/CommonSection'
import '../styles/create-item.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { getValue } from '@testing-library/user-event/dist/utils'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const navigate = useNavigate();
  const notify= () => toast("Uploading... Redirecting to home")
  
  const [object, setObject] = useState(null)
  const [objectInput, setObjectInput] = useState(null)
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const handleImage = (e) =>{
    const file =e.target.files[0];
    setObjectInput(file);

    const fileReader = new FileReader();
    fileReader.onload = function(e){
      console.log(e.target.result);
      setObject(e.target.result);
    }
    fileReader.readAsDataURL(file);

  }

  const handleFormData= async (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append('object', objectInput)
    form.append('name', name);
    form.append('title', title)

    const result = await createPost(form);
    // toast.success('Uploading File...')
    navigate('/home')
    console.log({result})
    

  }

  const createPost = async (form) => {
    try {
      const res = await axios.post("https://fabrikapi.herokuapp.com/api/post/add",form);
      return res.data;
    } catch (error) {
      return getValue(error, ["response","data"]);
    }
  }

  return (
    <>
      <Header/>
      <CommonSection title= "Upload Item"/>

      <section>
        <Container>
          <Row>
            <Col lg='9' md='8' sm='6' className='m-auto'>
              <div className="create_item">

                <form  enctype="multipart/form-data" onSubmit={handleFormData}>

                  <div className="form_input">
                    <label htmlFor=''>Upload File</label>
                    <input  type="file" className='upload_input' required onChange= {handleImage} />
                  </div>

                  <div className="form_input">
                    <label htmlFor=''>Title</label>
                    <input  type="text" placeholder="Enter title of your model" name='title' onChange={e => setTitle(e.target.value)} />
                  </div>

                  <div className="form_input">
                    <label htmlFor=''>Creator Name</label>
                    <input  type="text" placeholder='Enter your name' name='name' onChange={e => setName(e.target.value)}/>
                  </div>

                  <button type='submit'
                    className="send_btn text-center"
                    style={{
                      border: 'none',
                      padding: '7px 25px',
                      borderRadius: '5px',
                      marginTop: '20px'
                    }} 
                    onClick={notify}
                  >
                  <ToastContainer position="top-center"
                    autoClose={9000}/>
                    
                    Upload
                  </button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Create