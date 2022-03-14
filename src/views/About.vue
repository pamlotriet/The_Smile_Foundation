<template>
  <div class="cardInvolved">
    <div class="head"><h1 class="involvedH1">Launch a fundraising campaign</h1></div>
    <div class="row1">
      <img src="../assets/download.png"/>
      <p class="subtext1">From lemonade stands to cross-country bike rides and everything in between, 
        we’ve watched thousands of campaigners prove that nothing is crazy when it 
        comes to raising money for the less forunate.Create your own campaign by choosing a 
        fundraising activity, setting up a simple campaign page, and spreading the word. 
        Then, we’ll send 100% of the funds you raise to the charity or charities of your choice.
        <br><br>
        Fundraising Ideas: <a href="https://www.futurelearn.com/info/blog/10-fundraising-ideas">https://www.futurelearn.com/info/blog/10-fundraising-ideas</a></p>
    </div>
  </div>

    <div class="cardInvolved">
      <div class="head"><h1 class="involvedH1">Volunteer</h1></div>
      <div class="row1">
      <img src="../assets/volunteer.jpg"/>
       <ul class="subtext2">
          <h4>Join the tens of thousands of people of all ages and backgrounds who each year bring their 
        energy and enthusiasm to the Smile Foundation's events to help raise money for charities.</h4>
          <li>Volunteer at our soup kitchens</li>
          <li>Get in touchwith local charities to volunteer.</li>
          <li>Volunteer to walk dogs at local animal shelters</li>
          <li>Volunteer to provide extra learning at orphanges</li>
        </ul>
        <a href = "mailto:pamela.lotriet@gmail.com"><i class="fas fa-envelope" id="email"></i></a>
      </div>
  </div>
    <div class="cardInvolved">
      <div class="head"><h1 class="involvedH1">Make a positive impact</h1></div>
      <div class="row1">
      <img src="../assets/impact.png"/>
        <ul class="subtext2">
          <h4>Make a positive impact and connect to people in your community. 
          You’ll build social connection and help reduce social isolation and loneliness in your neighbourhood.</h4>
          <li>Write a letter to people living in aged care</li>
          <li>Share your skills and hobbies</li>
          <li>Start a street working bee</li>
          <li>Show Kindness</li>
        </ul>
      </div>
  </div>
</template>

<style scoped>

  .about{
    text-align: center;
    background-color: #002043;
    margin: 0%;
    padding: 0%;
  }

  .img{
    margin-top: 50px;
    max-width: 200px;
    width: 200px;
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-radius: 70%;
  }

  .involvedH1{
    padding-top: 30px;
    font-family: Avenir next condensed;
  }

  hr{
    color: #000000;
    font-weight: 700;
  }

  .row1{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 90%;
    background:white;
    margin-left: 50px;
    color: #000000;
    text-align: left;
    padding-bottom: 40px;
  }


  .cardInvolved, .head,  .involvedH1{
    display: block;
    width: 80%;
    background:white;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    text-align: center;
  }

  .cardInvolved{
      margin-top: 30px;
      background:white;
      box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
  }

  .title{
    margin: 0%;
    color: #ffffff;
    background-color: #002043;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    width: 100vw;
    padding-top: 20px;
    font-family: Avenir next condensed;
  }

  img{
    width: 300px;
    height: 200px;
  }

  .subtext1{
    padding-left: 100px;
    text-align: left;
    font-family: Avenir;
    font-size: 18px;
  }

li{
  text-align: left;
}

#email{
  color:red ;
}

 i{
    padding: 2%;
    font-size: 48px;
}

.subtext2{
  text-align: left;
}
</style>