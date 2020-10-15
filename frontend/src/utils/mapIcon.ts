import L from 'leaflet';
import mapMarkerImg from '../images/logo-img.svg';

const mapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 3]
});

export default mapIcon;
