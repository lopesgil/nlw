import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/logo-img.svg';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap() {
    return (
        <div id="page-map">
          <aside>
            <header>
              <img src={mapMarkerImg} alt="Happy" />
              <h2>Escolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
              <strong>Rio de Janeiro</strong>
              <span>Rio de Janeiro</span>
            </footer>
          </aside>

          <Map
              center={[-22.9058678,-43.3162876]}
              zoom={12}
              style={{width: '100%', height: '100%'}}
          >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            <Marker
                icon={mapIcon}
                position={[-22.9058678,-43.3162876]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                Lar das meninas
                <Link to="/orphanages/1">
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
          </Map>

          <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#fff"  />
          </Link>
        </div>
);
}

export default OrphanagesMap;
