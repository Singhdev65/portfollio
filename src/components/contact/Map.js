import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker
} from "react-simple-maps"

const Map = () => {
  return (
    <ComposableMap>
      <ZoomableGroup center={[28.535517, 77391029]} zoom={2}>
        <Geographies geography='/features.json'>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='#fff'
                stroke='#FF5533'
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[28.535517, 77391029]}>
          <circle r={7} fill='#FF5533' />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default Map
