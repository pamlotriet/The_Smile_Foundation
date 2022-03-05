<template>

 <form class="container">
     <h1>Charities to donate to in South Africa</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat felis, imperdiet finibus mi at, pulvinar faucibus quam. Nullam in rutrum urna. Ut commodo a felis ut pellentesque. Fusce imperdiet justo sapien, et consequat diam vulputate sit amet. Etiam a diam sagittis, gravida dolor convallis, eleifend lacus. Quisque malesuada, mauris vitae interdum congue, turpis quam facilisis ipsum, vel malesuada odio diam non tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin lacinia lacus quis fermentum laoreet. Proin interdum molestie elementum. Vivamus cursus sem non eros consequat mollis.
        Nam nisi arcu, auctor quis tellus vitae, tincidunt vulputate leo. Mauris semper urna diam, sed imperdiet turpis aliquam in. In auctor facilisis maximus. Phasellus sit amet purus magna. Donec porttitor turpis venenatis ipsum eleifend, sed varius augue mollis. Nulla imperdiet est lorem, ut aliquam leo vehicula vel. Ut quis sodales lectus. Nunc quis justo dictum, ultricies magna ut, imperdiet ex. Sed ornare fringilla porta. Vestibulum sed eros feugiat, aliquet est eu, ornare libero. Vivamus blandit velit eros, at eleifend urna ullamcorper eget.</p>
     <div class="div-container">
         <div class="charity">
              <img src = "./assets/bordercollie.jpg" class="charity-pics"/>
              <p>Border Collie Rescue is a non-profit organisation which was started in 1997 by dedicated individuals who care for this very special breed.</p>
             <a href="https://bordercollierescue.co.za/"> Border Collie Rescue</a>
         </div>
         <div class="charity">
             <img src = "./assets/war.jpg" class="charity-pics"/>
             <p>HOPE SA feeding HOPE to all people in  South Africa and beyond.  We  strive to provide at least the basic human needs for mankind. Together with, Each One Help One, we can create positive impact in communities. Our core Mission is to align to the Act Now Campaign and align to the 17 UN Sustainable Development Goals(UNSDG’s). It is good to be blessed, and better to be a Blessing.</p>
             <a href="https://hopesa.org/?_ga=2.201082670.1604024191.1643110692-347869884.1643110691">Hope SA</a>
         </div>
         <div class="charity">
             <img src = "./assets/Logo-01.png" class="charity-pics"/>
             <p>Woman Against Rape was founded by Janine Rowley, a business executive and model, who once walked the international ramps for top designer fashion brands. She and her team now walk alongside rape victims, abused and molested children and adults in South African to bring comfort, care, education and upliftment to people.</p>
            <a href="https://womanagainstrape.co.za/"> Women Against Rape</a>
         </div>
         <div class="charity">
             <img src = "./assets/logo.jpg" class="charity-pics"/>
             <p>The Jones Safe House, near Kommetjie is a registered non-profit organization that takes on abused, abandoned, and neglected children and abused/addicted mothers.</p>
             <a href="http://www.thejonessafehouse.org/">Jones Safe House</a>
         </div>
     </div>
     
      <div class="div-container">
         <div class="charity">
            <img src = "./assets/mc.jpg" class="charity-pics"/>
             <p>We act as a connector, a collaborator, a catalyst, and an advocate for change. For 40 years and in more than 40 countries, we help communities forge new paths to prosperity in the face of disaster, poverty, and the impacts of climate change.</p>
             <a href="https://www.mercycorps.org/">Mercy Corps</a>
         </div>
         <div class="charity">
             <img src = "./assets/saveChild.jpg" class="charity-pics"/>
             <p>With your tremendous support, we change the world for children through innovative programmes, bold campaigns, independent advocacy and high-impact partnerships.</p>
             <a href="https://www.savethechildren.org.za/">Save the childeren</a>
         </div>
         <div class="charity">
             <img src = "./assets/SCI.jpg" class="charity-pics"/>
             <p>We work across multiple sectors to deliver effective and robust health programmes that have a lasting impact. We’re proud to consistently be named as one of the most cost-effective non-profit initiatives globally.</p>
             <a href="https://schistosomiasiscontrolinitiative.org/">SCI Foundation</a>
         </div>
         <div class="charity">
             <img src = "./assets/acres.jpg" class="charity-pics"/>
             <p>We exist to rescue children and create families. Each child that enters our care has experienced profound loss, trauma, and/or abandonment. Many of our most vulnerable children have been abandoned specifically due to stigmas surrounding their extra medical needs.</p>
             <a href="https://www.acresoflove.org/">Acres of Love</a>
         </div>
     </div>

      <div class="div-container">
         <div class="charity">
             <img src = "./assets/eth.png" class="charity-pics"/>
             <p>Ethelbert Child & Youth Care Centre (CYCC) is a registered non-profit and public benefits organisation (NPO & PBO) specialising in the full-time care, rehabilitation and support of vulnerable, abandoned and abused children within Kwa-Zulu Natal.</p>
             <a href="https://ethelbert.co.za/">Ethelbert Childeren's Home</a>
         </div>
         <div class="charity">
             <img src = "./assets/woodrock.jpg" class="charity-pics"/>
             <p>We are a leading non-profit, pro-life, rescue, rehabilitation and re-homing shelter in South Africa. We have over 350 animals in our care at any given time.</p>
             <a href="https://woodrockanimalrescue.co.za/">Woodrock Animal Rescue</a>
         </div>
         <div class="charity">
             <img src = "./assets/wsm.jpg" class="charity-pics"/>
             <p>The mission of Carehaven is to provide residential shelter and refuge to abused woman and their children, the opportunity for them to find healing and to learn skills that will empower them to cope as self-reliant members of society.</p>
             <a href="https://wcwsm.org.za/">Womens Shelter Movement</a>
         </div>
         <div class="charity">
             <img src = "./assets/saartjie_baartman_centre.jpg" class="charity-pics"/>
             <p>The Saartjie Baartman Centre for Women and Children (SBCWC ) is a one-stop centre for women and children who are survivors of abuse. Our vision is the creation of a safe and secure society and a human rights culture where women and children are empowered to exercise their full rights.</p>
             <a href="http://www.saartjiebaartmancentre.org.za/">Saartjie Baartman Centre for women and childeren</a>
         </div>
     </div>
 </form>

</template>


<script>
    export default {
        name: 'home'
    }
</script>

<style >
    .charity{
        height: 10cm;
        width: 25%;
        margin: 0%;
        padding-top: 2%;
        padding-bottom: 2%;
        border-style: groove;
        border-color: #002043;
        margin-right: 1cm;
        margin-left: 1cm;
        align-content: center;
        background:#B6D0E2;
    }

    .div-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 2%;
    }


    .charity-pics{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        height: 50%;
        padding: 2%;
        
    }

    .charity a{
        font-size: 24px;
        color: white;
        font-weight: 700;
    }

    .container{
        text-align: center;
    }

    h1{
        font-size: 24px;
        color: white;
        font-weight: 700;
        background-color: #315174;
        padding: 0%;
        padding-top: 1%;
        padding-bottom: 1%;
        margin: 0%;
    }

    p{
        padding: 0%;
        margin: 0%;
    }
</style>