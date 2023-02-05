import React from "react";
import "./styles.css";
import logohdr from "../assets/images/grandma-storytelling.png";
import story1 from "../assets/images/hare-tortoise.jpg";
import story2 from "../assets/images/The-Greedy-Dog-Story.jpg";
import story3 from "../assets/images/Moral-story-The-Thirsty-Crow.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faRightToBracket,faHeart,faComment } from '@fortawesome/free-solid-svg-icons';

const fakeData = [
  {
    title: "The Hare and the Tortoise",
    image: story1,
    short: "There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping."
  },
  {
    title: "The Hare and the Tortoise",
    image: story1,
    short: "There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping."
  },
  {
    title: "The Hare and the Tortoise",
    image: story1,
    short: "There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping."
  },
  {
    title: "The Hare and the Tortoise",
    image: story1,
    short: "There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping."
  },
  
]

const Inspiration = ()=> {
    return(
      <>
      
        <title>English Short Stories</title>
          <div className="siteHeader">
              <div className="section">
                <img className="logo" src={logohdr}/>
              </div>
              <div className="topic">
                <p> English Short Stories</p>
              </div>

              <div className="section">
                  <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faRightToBracket} size="lg"/>
                  </a>
              </div>
          </div> 

        <div className="container">
          {fakeData.map((item)=>
            (
            <div className="box">
              <div className="bgpic">
                <img className="pic" src={item.image}/>
              </div>
              <h2>{item.title}</h2>
              <p>{item.short}</p>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} size="lg"/>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faComment} size="lg"/>
              </a>
            </div>
            )
          )}
         
          <div className="box">
            <div className="bgpic">
                <img className="pic" src={story2}/>
            </div>
            <h2> The Dog and the Bone</h2>
            <p>Once there was a dog who wandered the streets night and day in search of food.
                One day, he found a big juicy bone and he immediately grabbed it between his mouth and took it home.</p>
            <a href="#">
              <FontAwesomeIcon icon={faHeart} size="lg"/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faComment} size="lg"/>
            </a>
          </div>
            <div className="box">
                <div className="bgpic">
                    <img className="pic" src={story3}/>
                </div>
                <h2>The Thirsty Crow</h2>
                <p>After flying a long distance, a thirsty crow was wandering the forest in search of water.
                    Finally, he saw a pot half-filled with water. He tried to drink from it but his beak wasn’t long enough
                    to reach the water inside.</p>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} size="lg"/>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} size="lg"/>
                </a>
              </div>
            </div>
      </>
    );
}
export default Inspiration;
