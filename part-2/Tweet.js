function Tweet(props) {
  return (<div className="tweet">
    <p>{props.username}</p>
    <p>{props.name}</p>
    <p>{props.message}</p>
    <p>{props.date}</p>
  </div>)
}