import React from 'react'
import  styled  from 'styled-components';

const VideoAnimationWrapper =  styled.div`

background-color: #160e2a;
            display: flex;
            align-items: center;
            justify-content: center;
            height:700px;
            padding-top: 50px;
            z-index: 1;
            @media (max-width:800px){
                margin-top: -220px;
                padding-left: 30px;
                margin-bottom: -220px;

            }
        video{
            height: 700px;
            @media (max-width:800px) {
                height: 340px;
                margin-left: 320px;
            }
        }

        .align-div{

            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 700px;
            width: 1400px;
            @media (max-width:800px) {
                width: 300px;
                margin-left:-255px;
                transform: scale(0.7);
            }
        }

        .white-div{
             position: absolute;
            height: 400px;
            width: 200px;
            background-color: #160e2a;
            
        }


        .helper1{
            top: -200px;
            left: 0;   
            @media (max-width:800px) {
                top: -150px;
            }
        }
        .helper2{
            bottom: -100px;
            left: 0; 
            @media (max-width:800px) {
                bottom: -100px;
            }  
        }
        .helper3{
            top: -250px;
            left: 205px;   
            @media (max-width:800px) {
                top: -200px;
            }
        }
        .helper4{
            bottom: -150px;
            left: 205px;   
        }

        .helper5{
            top: -150px;
            left: 410px;   
        }
        .helper6{
            bottom: -200px;
            left: 410px;   
        }


        @media (max-width:800px) {
            .helper7,.helper8,.helper9,.helper10,.helper11,.helper12,.helper13,.helper14{
                display: none;
            }
        }

        @media (min-width:800px) {


        .helper7{
            top: -350px;
            left: 615px;   
        }
        .helper8{
            bottom: -330px;
            left: 615px;   
        }
        .helper9{
            top: -300px;
            left: 820px;   
        }
        .helper10{
            bottom: -350px;
            left: 820px;   
        }
        .helper11{
            top: -100px;
            left: 1025px;   
        }
        .helper12{
            bottom: -250px;
            left: 1025px;   
        }
        .helper13{
            top: -150px;
            left: 1230px;   
        }
        .helper14{
            bottom: -150px;
            left: 1230px;   
       
        }
    }
        .line{
            position: absolute;
            height: 100%;
            width: 6px;
            
            background-color: #160e2a;
        }
        .aline1{
            left: 200px;   
        }
        .aline2{
            left: 404.5px;   

        }
        .aline3{
            left: 609.5px;   

        }
        .aline4{
            left: 814.5px;   

        }
        .aline5{
            left: 1019.5px;   

        }
        .aline6{
            left: 1224px;   

        }

        .up10{
            animation: moveUp 2s ease-in-out  infinite;
        }
       
        .down10{
            animation: moveDown 2s ease-in-out  infinite;

        }


        .up20{
            animation: moveUp1 3s ease-in-out  infinite;
        }
       
        .down20{
            animation: moveDown1 3s ease-in-out  infinite;

        }

        @keyframes moveUp {
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(10px);
            }
            100%{
                transform: translateY(0px);

            }
        }

        @keyframes moveDown {
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(-10px);
            }
            100%{
                transform: translateY(0px);

            }
        }


        @keyframes moveUp1 {
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(20px);
            }
            100%{
                transform: translateY(0px);

            }
        }

        @keyframes moveDown1 {
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(-20px);
            }
            100%{
                transform: translateY(0px);

            }
        }





`


function VideoAnimation() {
  return (
    <VideoAnimationWrapper>
      <div class="align-div">
    <video autoPlay={true} loop muted={true}  >
        <source src="/clubexcel intro.mp4" type="video/mp4"/>
    </video>
    <div class="white-div helper1 up10"></div>
    <div class="white-div helper2 down10"></div>
    <div class="white-div helper3 up20"></div>
    <div class="white-div helper4 down20"></div>
    <div class="white-div helper5 up10"></div>
    <div class="white-div helper6 down10"></div>
    <div class="white-div helper7 up20"></div>
    <div class="white-div helper8 down20"></div>
    <div class="white-div helper9 up10"></div>
    <div class="white-div helper10 down10"></div>
    <div class="white-div helper11 up20"></div>
    <div class="white-div helper12 down20"></div>
    <div class="white-div helper13 up10"></div>
    <div class="white-div helper14 down10"></div>

    <div class="line aline1"></div>
    <div class="line aline2"></div>
    <div class="line aline3"></div>
    <div class="line aline4"></div>
    <div class="line aline5"></div>
    <div class="line aline6"></div>
</div>
    </VideoAnimationWrapper>
  )
}

export default VideoAnimation
