import "./CounterCard.css"

const CounterCard = (props) => {
    return(
        <section className="CounterCard">
            <h2 className="CounterCard__h2">{props.counter}</h2>
        </section>
    );
}

export default CounterCard 