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
          >
            <l-popup>
              <a class="popup-detail">
                <div class="popup-main">
                  <div class="popup__image">
                    <img :src="l.countryInfo.flag" :alt="l.countryInfo.iso3" />
                  </div>
                  <div class="popup__content">
                    <p class="title">{{ l.country }}</p>
                    <div class="columns">
                      <div class="column">
                        <p>Cases: <ICountUp :endVal="parseInt(l.cases)" /></p>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p>Active:</p>
                        <ICountUp :endVal="parseInt(l.active)" />
                      </div>
                      <div class="column">
                        <p>Critical:</p>
                        <ICountUp :endVal="parseInt(l.critical)" />
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p>Recovered:</p>
                        <ICountUp :endVal="parseInt(l.recovered)" />
                      </div>
                      <div class="column">
                        <p>Deaths:</p>
                        <ICountUp :endVal="parseInt(l.deaths)" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </l-popup>
          </l-circle-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
import { LMap, LTileLayer, LCircleMarker, LPopup } from "vue2-leaflet";
import ICountUp from "vue-countup-v2";

export default {
  name: "MapLeaflet",
  props: ["data"],
  data: () => ({
    tileLayerUrl:
      "https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png",
    tileLightLayerUrl:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    zoom: 3,
    center: [13, 122],
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
        navigator.geolocation.getCurrentPosition(({ coor }) => {
          this.flyTo(coor.latitude, coor.longitude);
        });
      }
    },
    flyTo(lat, lon) {
      this.$refs.map.mapObject.flyTo([lat, lon], 5, {
        animate: true,
        duration: 2
      });
    }
  },
  watch: {
    data(val) {
      this.$refs.map.mapObject.flyTo(
        [val.countryInfo.lat, val.countryInfo.long],
        5,
        {
          animate: true,
          duration: 2
        }
      );
    }
  },
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LPopup,
    ICountUp
  }
};
</script>
