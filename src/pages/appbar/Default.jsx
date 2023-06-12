import logo from '../../static/Kaldi.png';

const center = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%"
  }

export const Default =  () => {
    return (
        <div>
            <img src={logo} alt="logo" style={center}/>
        </div>
    );
}