function Card(props) {
      
    return (  
      <div className="card mb-3" style={{ maxWidth: "18rem", margin: "50px"}}>
        <h5 className="card-header" style={{background: "#AED6F1" }}>{props.header}</h5>
        <div className="card-body" style={{background: "#EBF5FB" }}>
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {<hr/>}
          {props.body}
          {/* {props.status && <div id="createStatus">{props.status}</div>} */}
        </div>
      </div>
    );
  }
  
  export default Card;