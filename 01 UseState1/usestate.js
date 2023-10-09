//functional component
const Cat = (props) => {
    //state declaration with hook
    const [isHungry, setIsHungry] = React.useState(true);

    //return value with JSX
    return(
        <div>
            <p>I am {props.name}, and I am {isHungry ? "Hungry" : "Full"}! </p>
            <button
            onClick={()=> {
                //change the state value
                setIsHungry(false);
            }}
            disabled={!isHungry}
            >
                {isHungry ? "Pour me some milk, please!" : "Thank You"}
            </button>
        </div>
    );
}

//Functional Component
const Cafe = () => {
    return (
    <div>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
    </div>

    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot (document.getElementById('root')).render(myApp);