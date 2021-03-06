import React from 'react';

import CardOption from '../components/CardOption';
import Mapita from '../components/Mapita';

import './styles/Events.scss';

const EventOption = () => {
  const data = [
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventTitle: 'El llanerazo',
      eventDetails: 'Vive el mayor festival de música llanera',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventDisponibility: 'Sin disponibilidad',
      pricePeople: '200.000',
      priceLocation: null,
    },
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
  ];

  return (
    <section className='EventsContainer'>

      <div className='container'>

        <div className='locationDetails'>
          <small>Más de 300 experiencias increibles | 31 jul - 20 ago | 1 aventurero</small>
          <h3>Aventuras en Ewaso <br/> Kendong</h3>
        </div>

        <section className='cardsOption'>
          { data.map((item) => {
            return <CardOption item={item} />;
          }) }
        </section>

      </div>

      <section className='mapitaContainer'>
        <Mapita />
      </section>

    </section>
  );
};

export default EventOption;
