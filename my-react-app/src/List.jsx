
function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp; 
        <b>{item.calories}</b></li>);
    
    return(<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>);
    /*
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2,name:"orange", calories: 45}, 
                    {id: 3,name:"banana", calories: 105}, 
                    {id: 4,name:"coconut", calories: 159}, 
                    {id: 5,name:"pineapple", calories: 37}];*/

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Ordem alfabética
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Ordem alfabética reversa
    //fruits.sort((a, b) => a.calories - b.calories); //Ordem numerica ascendente
    //fruits.sort((a, b) => b.calories - a.calories); //Ordem numerica descendente

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
    /*
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                        {fruit.name}: &nbsp; 
                        <b>{fruit.calories}</b></li>);*/
    /*
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp; 
        <b>{lowCalFruit.calories}</b></li>);*/
    /*
    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
        {highCalFruits.name}: &nbsp; 
        <b>{highCalFruit.calories}</b></li>);*/

}

export default List