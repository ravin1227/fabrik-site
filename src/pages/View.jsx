import React, { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Container, Row, Col } from 'reactstrap'
import SceneInit from '../Scene/Scenelnit';
import '../styles/view.css'

const View = (props) => {
  const {object, _id,name,title,date} = props.item;
  // let objData = object.data.data
  // console.log(objData)
  // const base64String =   btoa(new Uint8Array(object.data.data).reduce(function (data, byte) {
  // return data + String.fromCharCode(byte);}, ''));
  // const source = `data:image/png; base64,${base64String}`  
  // console.log(source)

    useEffect(()=>{
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
        const loader = new GLTFLoader();
        loader.load( '/objects/scene.gltf', function ( gltf ) {
        test.scene.add( gltf.scene );
        }, undefined, function ( error ) {
        console.error( error );
        } );
    })

  return (
    <section className='canvas'>
        <Container>
        <Row>
            <Col lg='12'>
                <canvas id="myThreeJsCanvas" />
            </Col>
        </Row>
        </Container>
    </section>    
  )
}

export default View