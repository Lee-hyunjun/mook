<template>
  <div class="mainContent_m">
    <div>
      <h1>Business area</h1>
      <div class="content">
        <div>
          <div>
            <div class="image1 image"></div>
          </div>
          <div>
            <p>01</p>
            <span>비즈니스 리모델링</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image2 image"></div>
          </div>
          <div>
            <p>02</p>
            <span>미래전략 설계</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image3 image"></div>
          </div>
          <div>
            <p>03</p>
            <span>컨설팅</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image4 image"></div>
          </div>
          <div>
            <p>04</p>
            <span>AI 모델 계발</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image5 image"></div>
          </div>
          <div>
            <p>05</p>
            <span>AI 학습용 데이터 가공</span>
          </div>
        </div>
        <div>
          <div>
            <div class="image6 image"></div>
          </div>
          <div>
            <p>06</p>
            <span>초기 투자 유치</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
  .mainContent_m{
    max-width: 1200px;
    width: 100%;
    // background-image: url("../assets/backBuilding.png");

    > div{
      margin: 0 auto;
      width: 100%;
      padding-top: 87px;
      
      >h1{
        padding-left: 6vw;
        font-size: 5vw;
        margin-bottom: 50px;
        font-family: GmarketSansTTFBold ,sans-serif;
        color: #0d1741;
        width: 100%;
      }

      > div{
        max-width: 1060px;
        width: 100%;
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        >div{
          overflow: hidden;
          height: 53vw;
          width: 41vw;
          box-shadow:3px 10px 20px #d8d8d8;
          margin-bottom: 5vw;

          .image1{
            background-image: url("../assets/mobile/content1/1.png");
          }
          .image2{
            background-image: url("../assets/mobile/content1/2.png");
          }
          .image3{
            background-image: url("../assets/mobile/content1/3.png");
          }
          .image4{
            background-image: url("../assets/mobile/content1/4.png");
          }
          .image5{
            background-image: url("../assets/mobile/content1/5.png");
          }
          .image6{
            background-image: url("../assets/mobile/content1/6.png");
          }

            >div{
              overflow: hidden;
              height: 65%;
              > div:first-child{
                background-size: 115%;
                height:418px;
                // background:orange ;
              }
            }

          > div:last-child{
            // display: flex;
            flex-flow: wrap;
            align-items: center;
            justify-content: flex-start;
            padding-left: 3vw;
            height: 35%;
            background: white ;
            padding-top: 4vw;

            p{
             color: #01bc9a; 
             font-size: 5vw;
             display: flex;
             font-family: GmarketSansTTFBold ,sans-serif;
             margin-bottom: 2vw;
            }

            p::after{
              content: "";
              display: block;
              height: 5vw;
              width: 1px;
              background:#5e6480;
              margin:0 10px;
            }
            
            span{
              color: #0d1741;
              font-size: 3.8vw;
              font-family: GmarketSansTTFMedium ,sans-serif;
            }
          }
        }
        >div:nth-child(1),
        >div:nth-child(3),
        >div:nth-child(5){
          margin-right: 5vw;
        }

        >div:hover{
          
          .image{
            // width: 105%;
            // height: 105%;
            background-repeat: no-repeat;
            transform:scale(1.25);  
          }
        }
        .image{
          transition: 1s;
          // width: 100%;
          // height: 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>>
