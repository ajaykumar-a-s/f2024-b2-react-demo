const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
function greet(){
    return "Hello World";
}

function Demo() {

    const number =10;
    const name="ford";

    // <> </> JSX fragment
    return (
        <div style={person.theme}>
            <h3>This is H3 Header</h3>
            <p>Para 1 {number} : {name}</p>
            <p>{5+5}</p>
            <p>{greet()}</p>
            <img src={baseUrl + person.imageId + person.imageSize + ".jpg"} />
        </div>
    );

}
export default Demo;
