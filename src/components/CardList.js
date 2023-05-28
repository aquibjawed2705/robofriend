import Card from './Card'

function cardList({robots}) {
    return (
        <div>
          {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
        </div>
    )
    
}


export default cardList;