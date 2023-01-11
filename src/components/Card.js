import React from "react";
import pic1 from "../assets/images/story1.jpg";
import pic2 from "../assets/images/story2.jpg";
import "./styles.css";

const Card = ()=> {
    return(
      <>
      <div className="body-title">
        <h1>English Short Stories</h1>
      </div>
        <div className="wrapper">
            <img src= {pic1} alt ="Short Story"/>
            <h2 className="card-title">The Wolf And The Lion</h2>
            <p className="card-description">A Wolf had stolen a Lamb and was carrying it off to his lair to eat it. But his plans were very much changed when he met a Lion, who, without making any excuses, took the Lamb away from him. The Wolf made off to a safe distance, and then said in a much injured tone:"You have no right to take my property like that!"The Lion looked back, but as the Wolf was too far away to be taught a lesson without too much inconvenience, he said:"Your property? Did you buy it, or did the Shepherd make you a gift of it? Pray tell me, how did you get it?"
  What is evil won is evil lost.</p>
            <div className="card-btn">
              <button>Like</button>
              <button>Comment</button>
            </div>

        <div>
            <img src= {pic2} alt ="Short Story"/>
            <h2 className="card-title">The Master Trick</h2>
            <p className="card-description">A greedy fox stealthily entered a garden to eat the grapes. But its tail was cut down by a trap when it tried to escape from the trap. It worried because all other foxes would mock at its lost tall. Hence it planned a trick. When all foxes ridiculed it and said, "I have cut down the tail myself because it is a great hindrance. Now I am free and happy without my tail. So you too cut down your tails. It will be very convenient to all of you." An old wise fox laughed at the tricky fox and said, "I will also join you after losing my tail when I try to steal the grapes. 
            It looks very nice to be with a tail and I am proud of it." Now all other faxes understood the trick of the fox and mocked at it.
            The ashamed fox ran away into the forest.Moral of the Story : Don't believe selfish person's words.</p>
            <div className="card-btn">
              <button>Like</button>
              <button>Comment</button>
            </div>
        </div>
        </div>
       
      </>
    );
}
export default Card;
