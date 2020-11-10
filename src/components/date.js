export default function date(props) {
    return <div style={{'color': 'rgb(150, 150, 150)'}}><font style={{'color': 'black'}}>Birdth:</font> {new Date(props.date).toDateString()}</div>
}