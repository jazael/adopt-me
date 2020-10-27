import React from 'react';
import pet from '@frontendmasters/pet';

class Details extends React.Component {
  
  state = {
    name: '',
    animal: '',
    location: '',
    description: '',
    media: '',
    breed: '',
    loading: true
  }

  componentDidMount() {
    const { id } = this.props;
    pet.animal(id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
      }, console.error);
  }

  render() {
    const { loading, animal, breed, location, description, name } = this.state;
    if (loading) {
      return <h1>Loading ...</h1>;
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adop {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;

