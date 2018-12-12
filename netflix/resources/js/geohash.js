// geohash.js
// Geohash library for Javascript
// (c) 2008 David Troy
// Distributed under the MIT License

BITS = [16, 8, 4, 2, 1];

BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";

GeoHash = {
	encodeGeoHash : function (latitude, longitude) {
		var is_even=1;
		var i=0;
		var lat = []; var lon = [];
		var bit=0;
		var ch=0;
		var precision = 5;
		geohash = "";
	
		lat[0] = -90.0;  lat[1] = 90.0;
		lon[0] = -180.0; lon[1] = 180.0;
		
		while (geohash.length < precision) {
		  if (is_even) {
				mid = (lon[0] + lon[1]) / 2;
		    if (longitude > mid) {
					ch |= BITS[bit];
					lon[0] = mid;
		    } else
					lon[1] = mid;
		  } else {
				mid = (lat[0] + lat[1]) / 2;
		    if (latitude > mid) {
					ch |= BITS[bit];
					lat[0] = mid;
		    } else
					lat[1] = mid;
		  }
	
			is_even = !is_even;
		  if (bit < 4)
				bit++;
		  else {
				geohash += BASE32[ch];
				bit = 0;
				ch = 0;
		  }
		}
		return geohash;
	}
}