import React, { useState } from "react";
import Section from "./components/Section/Section";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Navbar from "./components/Header/Navbar";

const App = () => {
  const logo =
    "https://yt3.ggpht.com/ytc/AKedOLQGpw3gfnBm_5u10jFPCWk2tNHr-WpfRWOgvrcr=s900-c-k-c0x00ffffff-no-rj";

  let init_users = [
    {
      name: "Eva",
      lastName: "Green",
      age: 41,
      occupation: "Actress",
      image:
        "https://66.media.tumblr.com/0bcfa286786db2a693bfe83fadb014db/39bbfa66484db420-55/s640x960/e4e43862ac0baceea2d85e0af737008447ca993a.jpg",
      id: 1,
    },
    {
      name: "Christiano",
      lastName: "Ronaldo",
      age: 37,
      occupation: "Businessman",
      image:
        "https://i.pinimg.com/564x/8e/d7/03/8ed7036514c26be53f0a039f86d7bf86.jpg",
      id: 2,
    },
    {
      name: "Mila",
      lastName: "Kunis",
      age: 38,
      occupation: "Actress",
      image:
        "https://i.pinimg.com/originals/97/00/9b/97009bb6054e77268ac93f50ec8d8755.jpg",
      id: 3,
    },
    {
      name: "Irina",
      lastName: "Shayk",
      age: 38,
      occupation: "Super Model",
      image:
        "https://cdn.mos.cms.futurecdn.net/CqGqueNpiFTakydA5MCeXm-1200-80.jpg",
      id: 4,
    },
    {
      name: "Billie",
      lastName: "Eilish",
      age: 20,
      occupation: "Actress",
      image:
        "https://www.j-14.com/wp-content/uploads/2022/03/billie-eilish-oscars-red-carpet-2.jpg?crop=339px%2C19px%2C1870px%2C1870px&resize=800%2C800&quality=86&strip=all",
      id: 5,
    },
    {
      name: "Hayden",
      lastName: "Christensen",
      age: 41,
      occupation: "Actor",
      image:
        "https://www3.pictures.gi.zimbio.com/Jumper+Japan+Premiere+g_7eBS16VBcx.jpg",
      id: 6,
    },
  ];

  const [users, setUsers] = useState(init_users);
  const [state, setState] = useState(0);

  return (
    <div>
      <Navbar logo={logo} />
      <Section users={users} />
      <List users={users} />
      <Footer />
    </div>
  );
};

export default App;
