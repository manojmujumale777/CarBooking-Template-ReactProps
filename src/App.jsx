import Nav from "./Nav";
import Foot from "./Foot";
import Sec1 from "./Sec1";
import Sec2 from "./sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "./Sec8";

function App() {
  let nav = [
    {
      logo1:"Car",
      logo2:"Book",
      li1: "About",
      li2: "Services",
      li3: "Pricing",
      li4: "Cars",
      li5: "Blog",
      li6: "Contact",
      head1: "Fast & Easy Way To Rent A Car",
      p1: "Fast & Easy Way To Rent A Car A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts",
      p2:"Easy steps for renting a car",
    },
  ];

  let sec1=[
    {
      head1:"Make your trip",
      p1:"Pick-up location",
      place1:"city, Airport, Station, etc",
      p2:"Drop-off location",
      p3:"Pick-up date",
      p4:"Drop-off date",
      p5:"Pick-up time",
      p6:"Rent A Car Now",
      head2:"Better Way to Rent Your Perfect Cars",
      p7:"Choose Your Pickup Location",
      p8:"Select the Best Deal",
      p9:"Reserve Your Rental Car",
      p10:"Reserve Your Perfect Car"
    }
  ]

  let sec2=[
    {
    head1:"What we offer",
    head2:"Feeatured Vehicles",
    f_head:"Mercedes Grand Sedan",
    s_head:"Cheverolet",
    l_head:"$500 /day",
    b1:"Book now",
    b2:"Details",
    img1:"img/g2.jpg",
    img2:"img/i2.jpg",
    img3:"img/i3.jpg",
  }]

  let sec3=[
    {
      img1:"src/img/about1.jpg",
      p1:"About us",
      head1:"Welcome to Carbook",
      p2:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      p3:"On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth",      b1:"Search Vehicle",
    }
  ]

  let sec4=[
    {
      p1:"Services",
      head1:"Our Latest Services",
      p2:"Wedding Ceremony",
      p3:"City Transfer",
      p4:"Airport Transfer",
      p5:"Whole City Tour",
      p:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    }
  ]

  let sec5=[{
    head1:"Do You Want To Earn With Us? So Don't Be Late.",
    b1:"Become A Driver",
  }]

  let sec6=[
    {
      p1:"Testimonial",
      p2:"Happy Clients",
      fcap:"Far far away, behind the word mountains, far from the countriesVokalia and Consonantia, there live the blind texts.",
      fhead:"Roger Scott",
      h1:"Web Developer",
      h2:"System Analyst",
      h3:"Marketing Manager",
      img1:"img/p1.jpg",
      img2:"img/p2.jpg",
      img3:"img/p3.jpg",
    }
  ]

  let sec7=[
    {
      p:"Blog",
      head:"Recent Blog",
      date:"Oct. 29, 2019", 
      p1:"Admin",
      p2:"Why Lead Generation is Key for Business Growth",
      b1:"Read more",
      img1:"img/g1.jpg",
      img2:"img/i1.jpg",
      img3:"img/g3.jpg",
    }
  ]

  let sec8=[
    {
      h1:"60",
      p1:"Year Experienced",
      h2:"1,090",
      p2:"Total Cars",
      h3:"2,590",
      p3:"Happy Customers",
      h4:"67",
      p4:"Total Branches",
    }
  ]

  let foot=[
    {
      head1:"CARBOOK",
      p1:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      head2:"Information",
      p21:"About",
      p22:"Services",
      p23:"Term and Conditions ",
      p24:"Best Price Guarantee",
      p25:"Privacy & Cookies Policy",
      head3:"Customer Support",
      p31:"FAQ",
      p32:"Payment Option",
      p33:"Booking Tips",
      p34:"How it works",
      p35:"Contact Us",
      head4:"Have a Questions?",
      p41:"203 Fake St. Mountain View, San Francisco, California, USA",
      p42:"+2392 3929 210",
      p43:"info@yourdomain.com",
      copy:"Copyright ©2024 All rights reserved | This template is made by Rushikesh Chavan"
    }
  ]
  return (
    <>
      <Nav data={nav} />
      <Sec1 data1={sec1}/>
      <Sec2 data2={sec2}/>
      <Sec3 data3={sec3}/>
      <Sec4 data4={sec4}/>
      <Sec5 data5={sec5}/>
      <Sec6 data6={sec6}/>
      <Sec7 data7={sec7}/>
      <Sec8 data8={sec8}/>
      <Foot dataf={foot}/>
    </>
  );
}

export default App;
