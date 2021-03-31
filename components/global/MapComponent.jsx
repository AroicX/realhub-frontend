import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

export const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 10.482361797866025, lng: 7.428041684698176 }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: 10.482361797866025, lng: 7.428041684698176 }}
        />
      )}
    </GoogleMap>
  )),
)
