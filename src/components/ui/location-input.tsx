'use client'

import {useState, useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import {AdvancedMarker, APIProvider, ControlPosition, Map, MapControl} from "@vis.gl/react-google-maps";
import MapHandler from "@/app/[locale]/dashboard/settings/map-handler";
import {AutocompleteCustom} from "@/app/[locale]/dashboard/settings/auto-complate-custom";
import '@vis.gl/react-google-maps/examples.css';

const LocationInput = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyAleP-bnndcz6hu1pE_KsJAjeUqw4IBU_U',
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <GMap/>;
}

export default LocationInput;

function GMap() {
  // const center = useMemo(() => ({lat: 43.45, lng: -80.49}), []);
  // const [selected, setSelected] = useState({lat: 43.45, lng: -80.49});
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);


  return (
    <>
      <APIProvider apiKey={'AIzaSyAleP-bnndcz6hu1pE_KsJAjeUqw4IBU_U'}>
        {/*<Map*/}
        {/*  style={{width: '100vw', height: '100vh'}}*/}
        {/*  // defaultCenter={center}*/}
        {/*  defaultZoom={10}*/}
        {/*  gestureHandling={'greedy'}*/}
        {/*  disableDefaultUI={true}*/}
        {/*/>*/}
        <Map
          mapId={'bf5c1744d786ba3f'}
          style={{width: '100vw', height: '100vh'}}
          defaultZoom={10}
          defaultCenter={{lat: 41.311081, lng: 69.240562}}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={selectedPlace?.geometry?.location}/>
          {/*<Marker position={{lat: 22.54992, lng: 0}} />*/}
        </Map>
        <MapControl position={ControlPosition.TOP}>
          <div className="autocomplete-control">
            <AutocompleteCustom onPlaceSelect={setSelectedPlace}/>
          </div>
        </MapControl>
        {/*{selected && <Marker position={selected}/>}*/}
        <MapHandler place={selectedPlace}/>
      </APIProvider>
    </>
  );
}
