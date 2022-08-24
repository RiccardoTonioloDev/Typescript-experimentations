import Config from './config.json';
import axios from 'axios';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const apiKeyGoogle = Config.GOOGLE_API_KEY;
type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    //send to google api.
    axios
        .get<GoogleGeocodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
                enteredAddress
            )}&key=${apiKeyGoogle}`
        )
        .then((response) => {
            if (response.data.status !== 'OK') {
                throw new Error('Impossibile fare il fetch della location!');
            }
            const coordinate = response.data.results[0].geometry.location;
            const map = new google.maps.Map(
                document.getElementById('map') as HTMLElement,
                {
                    center: coordinate,
                    zoom: 20,
                }
            );
            new google.maps.Marker({ position: coordinate, map: map });
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        });
}

form.addEventListener('submit', searchAddressHandler);
