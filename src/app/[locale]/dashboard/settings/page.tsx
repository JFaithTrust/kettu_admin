'use client'

import '@vis.gl/react-google-maps/examples.css';

const SettingsPage = () => {


  return (
    <div>
      {/*<LocationInput />*/}
    </div>
  );
}

export default SettingsPage;


// const PlacesAutocomplete = ({setSelected}: { setSelected: any }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: {status, data},
//     clearSuggestions,
//   } = usePlacesAutocomplete();
//   const [open, setOpen] = useState(false);
//
//   const handleSelect = async (address: any) => {
//     setValue(address, false);
//     clearSuggestions();
//
//     const results = await getGeocode({address});
//     const {lat, lng} = getLatLng(results[0]);
//     setSelected({lat, lng});
//   };
//
//   return (
//     <div className="autocomplete">
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//         onFocus={() => setOpen(true)}
//         onBlur={() => {
//           setTimeout(() => setOpen(false), 200); // Delay to allow click event to register
//         }}
//       />
//       {open && status === "OK" && (
//         <ul className="autocomplete-list">
//           {data.map(({place_id, description}) => (
//             <li
//               key={place_id}
//               onClick={() => handleSelect(description)}
//               className="autocomplete-option"
//             >
//               {description}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// };