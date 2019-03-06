/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8081,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'worldclock',
			position: 'top_left',
			config: {
			timeFormat: 'hh:mm a',
			style: 'left',
			clocks: [
			{
				title: "Scotland",
				timezone: "Europe/London",
				flag: "gb",
			},
			{
				title: "Nepal",
				timezone: "Asia/Kathmandu",
				flag: "np",
			}
			]
			}
 		},	
		{
			module: "calendar",
			position: "top_left",
			config: {
				colored: true,
				maximumNumberOfDays: 2,
				coloredSymbolOnly: false,
				fade: false,
				calendars: [
					{
						// Mom
						url: 'https://calendar.google.com/calendar/ical/mom%40domain.net/private-123454a3b1d5185119f164b6f4c12345/basic.ics',
						symbol: 'calendar',
						color: '#800080',
					},
					{
						// Daughter
						url: 'https://calendar.google.com/calendar/ical/daughter%40domain.net/private-123451cd4c520580960010f639d12345/basic.ics',
						symbol: 'calendar',
						color: '#FFA500',
					},
					{
						// Daughter
						url: 'https://calendar.google.com/calendar/ical/daughter%40domain.com/private-1234531ec1105b1d5a6a423082d12345/basic.ics',
						symbol: 'calendar',
						color: '#FFC0CB',
					},
					{
						// Son
						url: 'https://calendar.google.com/calendar/ical/son%40domain.net/private-12345491d2c33ff369e9da6063412345/basic.ics',
						symbol: 'calendar',
						color: '#008000',
					},
				],
			}
		},
		{
			module: "newsfeed",
			position: "top_right",	// This can be any of the regions. Best results in center regions.
			config: {
				feeds: [
					{
						title: "Dawn/Dusk",
						url: "http://10.0.0.0:12345/media/dennis.xml",
					},
				]
			}
		},
		{
			module: 'MMM-DarkSkyForecast',
			position: 'top_right',
			classes: "default everyone",
			disabled: false,
			config: {
			apikey: "1234592ea6ac2a8f9dabd63f70712345", 
			latitude: "42.399987", //MUST HAVE BOTH
			longitude: "-71.437195",  //MUST HAVE BOTH
			iconset: "3c",
			concise: true,
			units: "us",
			showSummary: true,
			showHourlyForecast: true,
			showDailyForecast: true,
			maxDailiesToShow: 3,
			forecastLayout: "tiled"
			}
 		},	
		{
			module: "MMM-GoogleMapsTraffic",
			position: "top_right",
			header: "Traffic Map",
			config: {
				key: '12345yDptFiExVQA19cK5VUHoc1uKzWLCT12345',
				lat: 42.3140089,
				lng: -71.250461,
				height: '300px',
				width: '300px',
				styledMapType: "transparent",
				disableDefaultUI: true,
				backgroundColor: 'hsla(0, 0%, 0%, 0)',
				zoom: 10,
				markers: [
					{
					lat: 42.399987, 
					lng: -71.437195,
					fillColor: '#FF0000'
					},
				],
			}
		},
		{
			module: "newsfeed",
			position: "top_right",	// This can be any of the regions. Best results in center regions.
			config: {
				feeds: [
					{
						title: "Rotten Tomatoes",
						url: "http://10.0.0.0:1234/media/tomatoes.xml",
					},
				]
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "top_left",
			header: "Charles River",
			config: {
			maxWidth: "500px",
			updateInterval: 5 * 1000 * 60,
			ownImagePath: 'https://thebostonwebcam.com/MoS/west2/thebostonwebcam.com_west2.jpg',
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "top_left",
			header: "Scotland",
			config: {
			maxWidth: "500px",
			updateInterval: 5 * 1000 * 60,
// # Scottish Loch Ness
			ownImagePath: 'https://www.lochness.co.uk/livecam/img/lochness.jpg',
			}
		},
		{
			module: "MMM-Instagram",
			position: "top_left",
			header: "Instagram Feed",
			config: {
			access_token: "12345762.1677ed0.c6861d1f9e674008ad1262ac8ff12345",
			count: 200,
			min_timestamp:0,
			animationSpeed: 2500,
			updateInterval: 60 * 60 * 1000
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",	// This can be any of the regions. Best results in center regions.
			ignoreOldItems: true,
			ignoreOlderThan: 86400000,
			config: {
				feeds: [
					{
						title: "Reuters US",
						url: "http://feeds.reuters.com/Reuters/domesticNews",
					},
					{
						title: "Reuters Tech",
						url: "http://feeds.reuters.com/reuters/technologyNews",
					},
					{
						title: "WWT",
						url: "https://www.wwt.com/feed/",
					},
				]
			}
		},
	]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
