<template>
  <div id="map-cases">
    <div class="map-cases__container container">
      <div class="card">
        <l-map
          ref="map"
          style="z-index: 0; height: 100%; width: 100%"
          :zoom="zoom"
          :center="center"
        >
          <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
          <l-circle-marker
            v-for="l in casesbycountry"
            :key="l.countryInfo._id"
            :lat-lng="[+l.countryInfo.lat, +l.countryInfo.long]"
            color="#02d1a1"
            fillColor="#02d1a1"
            :fillOpacity="0.35"
            :stroke="false"
          />
          <l-marker :lat-lng="withPopup">
            <l-popup>
              <div @click="innerClick">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                Donec finibus semper metus id malesuada.
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LCircleMarker, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "MapLeaflet",
  data: () => ({
    tileLayerUrl:
      "https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png",
    zoom: 2,
    withPopup: latLng(47.41322, -1.219482),
    center: [35.000074, 104.999927],
    bounds: null,
    casesbycountry: []
  }),
  async created() {
    this.casesbycountry = await api.getbyCountries();
  },
  mounted() {
    this.getUserLocation();
  },
  computed: {},
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          this.flyTo(coords.latitude, coords.longitude);
        });
      }
    },
    innerClick() {
      alert("Click!");
    }
  },
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LMarker,
    LPopup
  }
};
</script>
