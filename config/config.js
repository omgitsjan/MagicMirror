var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.2.174"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

	language: "de",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert"
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
			module: "calendar",
			header: "Feiertage & F1",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://abo.kleiner-kalender.de/ical/c48-feiertage-in-deutschland.ics"
					},
					{
						symbol: "flag-checkered",
						url: "https://files-f1.motorsportcalendars.com/de/f1-calendar_qualifying_sprint_gp.ics"
					}
				]
			}
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "top_left",
			config: {
				showCoverArt: true,
				clientID: "",
				clientSecret: "",
				accessToken: "",
				refreshToken: ""
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: ["Hallo, ich bin Jan's SmartMirror!"],
					morning: ["Guten Morgen!", "Genieße deinen Tag!", "Hast du gut geschlafen?", "Ich hoffe du bist gut ausgeschlafen!", "Ich hoffe du hast einen guten Start in den Tag!"],
					afternoon: ["Guten Tag!", "Wie läuft dein Tag bisher?", "Ich hoffe dein Tag läuft gut!", "Ich hoffe du hast einen produktiven Tag!"],
					evening: ["N'abend", "Ich hoffe dein Tag war gut!", "Schönen Feierabend!", "Ich hoffe heute war ein produktiver Tag!", "Ich hoffe du hattest einen schönen Tag!"],
					"....-01-01": ["Frohes Neues Jahr!", "Ich hoffe du hattest einen guten Start ins neue Jahr!", "Happy New Year!", "Auf ein gutes neues Jahr!"],
					"....-10-31": ["Happy Halloween!", "Ich hoffe du hattest viel Spaß bei Halloween!"],
					"....-11-15": ["Alles Gute zum Geburtstag, Jan!", "Ich hoffe du hattest einen schönen Geburtstag, Jan!", "Happy Birthday, Jan!", "Auf ein gutes neues Lebensjahr!"],
					"....-03-08": ["Alles Gute zum Geburtstag, Doro!", "Ich hoffe du hattest einen schönen Geburtstag, Doro!", "Happy Birthday, Doro!", "Auf ein gutes neues Lebensjahr!"],
					day_sunny: ["Heute ist ein sonniger Tag!", "Ich hoffe du kannst das schöne Wetter genießen!"],
					snow: ["Es schneit, es schneit!", "Wie wär's mit einer Schneeballschlacht?", "Schneeballschlacht!", "Ich hoffe du hast Spaß im Schnee!"],
					fog: ["Es ist nebelig!", "Passt auf, es ist nebelig!", "Ich hoffe du bist vorsichtig bei dem nebligen Wetter!"],
					rain: ["Es regnet, nimmt den Regenschirm mit!", "Ich hoffe du bist trocken bei dem Regen!"]
				},
				updateInterval: 32000,
				morningEndTime: 12,
				afternoonStartTime: 12,
				afternoonEndTime: 17
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Trier",
				locationID: "2821164", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "",
				units: "metric",
				showWindDirection: true,
				showWindSpeed: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Wettervorhersage",
			config: {
				location: "Trier",
				locationID: "2821164", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: ""
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "N-TV Nachrichten",
						url: "https://www.n-tv.de/rss"
					},
					{
						title: "Welt Nachrichten",
						url: "https://www.welt.de/feeds/topnews.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-bitcoin",
			position: "top_right",
			config: {
				fiat: "usd", // 'usd' and 'eur' available, defaults to 'usd'
				showBefore: "1 BTC ≈ ", // will display before the bitcoin price, default 'Bitstamp'
				updateInterval: 60000 // update interval in milliseconds
			}
		}
		// {
		// 	module: "MMM-COVID19-AMPEL",
		// 	position: "bottom_bar",
		// 	config: {
		// 		header: "COVID-19 Inzidenzwert", // Header Title of Display on MagicMirror
		// 		cityID: ["154", "158"], // City ID from  https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0/data
		// 		infoRowClass: "small", // small, medium
		// 		showUpdateDateInHeader: true, //Show update date in header
		// 		showUpdateDateInRow: false, //Show update date in each row
		// 		showStatusLightLeft: true, //Show left status light
		// 		showStatusLightRight: true, // Show right status light
		// 		showTitle: true, //Show Title row with headlines if you want to display more than one information
		// 		showSKLK: true, //Show the Region information if the Pace displayed is the city or regional area (Stadt or Land)
		// 		showCases: true, //Show amount of active cases in city
		// 		showCasesPerPeople: true, //Show Percentage of active cases per inhabitant
		// 		showDeathRatePerPeople: true, //show death rate in % of infected people
		// 		show7DayIncidence: true, // Show 7 day incidence value for your location
		// 		landModeOnly: false, // Shows Bundesland instead of City in Bundesland (Thos who want to display only the Bundesland)
		// 		numberOfDigits: 2, //Round the Percentage and incidence value to number of digits
		// 		updateInterval: 3600000, // update interval in milliseconds // 1 Hour - Values are only refreshed every 24 H on Server
		// 		fadeSpeed: 4000
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
