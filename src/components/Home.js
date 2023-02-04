import React from "react";
import Card from "./Card"
import pic from "../bank.png"


function Home() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext

  return (
    <div>
      <Card        
        header="Welcome to BadBank"
        title="Nice to see you"
        text="You can use this for all your banking needs"
        body={<img src={pic} className="img-fluid" alt="Responsive" />}
      />
    </div>
  );
}

export default Home;
