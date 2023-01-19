import React from "react";
import "./styles.css";
import likebtn from "../assets/images/filled-like.png";
import commentbtn from "../assets/images/comments (1).png";
import logohdr from "../assets/images/grandma-storytelling.png";
import searchbtn from "../assets/images/search (1).png";
import loginbtn from "../assets/images/login-rounded-right.png";
import story1 from "../assets/images/hare-tortoise.jpg";
import story2 from "../assets/images/The-Greedy-Dog-Story.jpg";
import story3 from "../assets/images/Moral-story-The-Thirsty-Crow.jpg";

const Card = ()=> {
    return(
      <>
      
        <title>English Short Stories</title>
          <div className="siteHeader">
              <div className="section">
                <img className="logo" src={logohdr}/>
                <div className="menu"><a href="#">MainPage</a></div>
                <div className="menu"><a href="#">Category</a></div>
                <div className="menu"><a href="#">ContactUs</a></div>
                <div className="topic">
                    <p> English Short Stories</p>
                </div>
              </div>

              <div className="section">
                <div className="sideMenu">
                    <a href="#">
                      <img className="search" src={searchbtn} alt="search"/>
                    </a>
                    <a href="#">
                      <img className="login" src={loginbtn} alt="login"/>
                    </a>
                </div>
              </div>
          </div> 

        <div className="container">
          <div className="box">
            <div className="bgpic">
              <img className="pic" src={story1}/>
            </div>
            <h2>The Hare and the Tortoise</h2>
            <p>There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race.
                Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on
                going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won
                the race while he was busy sleeping.
                <br/><br/><strong>Moral of the story:</strong>
                There are actually a couple of moral lessons we can learn from this story.
                The hare teaches that overconfidence can sometimes ruin you. While the tortoise teaches us about the power of perseverance.
                Even if all the odds are stacked against you, never give up. Sometimes life is not about who’s the fastest or the strongest,
                it’s about who is the most consistent.</p>
            <a href="#">
              <img className="like" src={likebtn}/>
              </a>
            <a href="#">
              <img className="comment" src={commentbtn}/>
            </a>
        </div>
          <div className="box">
            <div className="bgpic">
                <img className="pic" src={story2}/>
            </div>
            <h2> The Dog and the Bone</h2>
            <p>Once there was a dog who wandered the streets night and day in search of food.
                One day, he found a big juicy bone and he immediately grabbed it between his mouth and took it home.
                On his way home, he crossed a river and saw another dog who also had a bone in its mouth. He wanted that bone for himself too.
                But as he opened his mouth, the bone he was biting fell into the river and sank. That night, he went home hungry.
                <br/><br/><strong>Moral of the story:</strong>
                If we always envy what others have, we’ll end up losing what we already have, just like the greedy dog.</p>
            <a href="#">
              <img className="like" src={likebtn}/>
            </a>
            <a href="#">
              <img className="comment" src={commentbtn}/>
              </a>
          </div>
            <div className="box">
                <div className="bgpic">
                    <img className="pic" src={story3}/>
                </div>
                <h2>The Thirsty Crow</h2>
                <p>After flying a long distance, a thirsty crow was wandering the forest in search of water.
                    Finally, he saw a pot half-filled with water. He tried to drink from it but his beak wasn’t long enough
                    to reach the water inside. He then saw pebbles on the ground and one by one, he put them in the pot until
                    the water rose to the brim. The crow then hastily drank from it and quenched his thirst.
                    <br/><br/><strong>Moral of the story:</strong>
                    If there’s a will, there’s a way. Every problem has a solution if we just look hard enough and don’t give up.</p>
                <a href="#">
                  <img className="like" src={likebtn}/>
                </a>
                <a href="#">
                  <img className="comment" src={commentbtn}/>
                  </a>
              </div>
            </div>
      </>
    );
}
export default Card;
