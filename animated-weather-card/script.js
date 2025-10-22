$(document).ready(function () {
	const hoursData = [
		{ day: "tod", hour: 0, weather: "clear-night", temp: 11, time: "00:00" },
		{
			day: "tod",
			hour: 1,
			weather: "partly-cloudy-night",
			temp: 10,
			time: "01:00"
		},
		{ day: "tod", hour: 2, weather: "rainy", temp: 9, time: "02:00" },
		{ day: "tod", hour: 3, weather: "cloudy", temp: 8, time: "03:00" },
		{
			day: "tod",
			hour: 4,
			weather: "partly-cloudy-night",
			temp: 7,
			time: "04:00"
		},
		{ day: "tod", hour: 5, weather: "clear-night", temp: 7, time: "05:00" },
		{ day: "tod", hour: 6, weather: "sunny", temp: 12, time: "06:00" },
		{ day: "tod", hour: 7, weather: "sunny", temp: 12, time: "07:00" },
		{ day: "tod", hour: 8, weather: "sunny", temp: 13, time: "08:00" },
		{ day: "tod", hour: 9, weather: "partly-cloudy", temp: 14, time: "09:00" },
		{ day: "tod", hour: 10, weather: "cloudy", temp: 16, time: "10:00" },
		{ day: "tod", hour: 11, weather: "rainy", temp: 17, time: "11:00" },
		{ day: "tod", hour: 12, weather: "rainy", temp: 19, time: "12:00" },
		{ day: "tod", hour: 13, weather: "rainy", temp: 20, time: "13:00" },
		{ day: "tod", hour: 14, weather: "partly-cloudy", temp: 20, time: "14:00" },
		{ day: "tod", hour: 15, weather: "partly-cloudy", temp: 20, time: "15:00" },
		{ day: "tod", hour: 16, weather: "partly-cloudy", temp: 19, time: "16:00" },
		{ day: "tod", hour: 17, weather: "cloudy", temp: 20, time: "17:00" },
		{ day: "tod", hour: 18, weather: "cloudy", temp: 19, time: "18:00" },
		{ day: "tod", hour: 19, weather: "cloudy", temp: 18, time: "19:00" },
		{ day: "tod", hour: 20, weather: "rainy", temp: 17, time: "20:00" },
		{ day: "tod", hour: 21, weather: "rainy", temp: 15, time: "21:00" },
		{ day: "tod", hour: 22, weather: "rainy", temp: 12, time: "22:00" },
		{ day: "tod", hour: 23, weather: "rainy", temp: 10, time: "23:00" },

		{ day: "tom", hour: 0, weather: "thunderstorm", temp: 8, time: "00:00" },
		{ day: "tom", hour: 1, weather: "thunderstorm", temp: 6, time: "01:00" },
		{ day: "tom", hour: 2, weather: "thunderstorm", temp: 4, time: "02:00" },
		{ day: "tom", hour: 3, weather: "thunderstorm", temp: 3, time: "03:00" },
		{ day: "tom", hour: 4, weather: "thunderstorm", temp: 2, time: "04:00" },
		{ day: "tom", hour: 5, weather: "cloudy", temp: 2, time: "05:00" },
		{ day: "tom", hour: 6, weather: "cloudy", temp: 0, time: "06:00" },
		{ day: "tom", hour: 7, weather: "cloudy", temp: -1, time: "07:00" },
		{ day: "tom", hour: 8, weather: "partly-cloudy", temp: -1, time: "08:00" },
		{ day: "tom", hour: 9, weather: "partly-cloudy", temp: -1, time: "09:00" },
		{ day: "tom", hour: 10, weather: "snowy", temp: 0, time: "10:00" },
		{ day: "tom", hour: 11, weather: "snowy", temp: 1, time: "11:00" },
		{ day: "tom", hour: 12, weather: "snowy", temp: 1, time: "12:00" },
		{ day: "tom", hour: 13, weather: "partly-cloudy", temp: 3, time: "13:00" },
		{ day: "tom", hour: 14, weather: "partly-cloudy", temp: 5, time: "14:00" },
		{ day: "tom", hour: 15, weather: "cloudy", temp: 7, time: "15:00" },
		{ day: "tom", hour: 16, weather: "cloudy", temp: 9, time: "16:00" },
		{ day: "tom", hour: 17, weather: "rainy", temp: 9, time: "17:00" },
		{ day: "tom", hour: 18, weather: "rainy", temp: 10, time: "18:00" },
		{ day: "tom", hour: 19, weather: "cloudy", temp: 10, time: "19:00" },
		{ day: "tom", hour: 20, weather: "cloudy", temp: 9, time: "20:00" },
		{ day: "tom", hour: 21, weather: "rainy", temp: 8, time: "21:00" },
		{ day: "tom", hour: 22, weather: "rainy", temp: 7, time: "22:00" },
		{ day: "tom", hour: 23, weather: "rainy", temp: 5, time: "23:00" },
		{ day: "tom", hour: 0, weather: "rainy", temp: 3, time: "00:00" }
	];

	// Iterate over the data and create the HTML dynamically
	hoursData.forEach((data) => {
		const hourDiv = $("<div>", {
			class: "hour d-flex flex-column align-items-center",
			"data-day": data.day,
			"data-hour": data.hour,
			"data-weather": data.weather,
			"data-temp": data.temp
		});

		const timeSpan = $("<span class='timeSpan'>").text(data.time);
		const iconSpan = $("<span>", { class: "material-symbols-rounded" });
		const tempSpan = $("<span class='tempSpan'>").text(data.temp + "°C");

		hourDiv.append(timeSpan, iconSpan, tempSpan);
		$(".hours").append(hourDiv);
	});
	const background = $(".background");
	const backgroundNight = $(".backgroundNight");
	const sun = $(".sun");
	const moon = $(".moon");
	const hoursContainer = $(".hours-container");
	const hours = $(".hour");
	const rain = $("#rain");
	const cloud = $("#cloud");
	const snow = $("#snow");
	const thunderstorm = $("#thunderstorm");
	const temperatureDisplay = $("#temperature");
	const weatherTypeDisplay = $("#weatherType");
	const currentDay = $("#currentDay");
	const initialHour = 11;

	function toggleSunMoon(hour) {
		if (hour >= 6 && hour <= 21) {
			const rotation = -90 + (hour - 7) * (180 / 15);
			sun.css("transform", "rotate(" + rotation + "deg)");
			sun.css("opacity", "1");
			moon.css("opacity", "0");
			background.css("opacity", "1");
			backgroundNight.css("opacity", "0");
			$(".hour").css("filter", "invert(0%)");
			$(".cardInfo").css("filter", "invert(0%)");
			moon.css("transition", "all 0s");
			setTimeout(function () {
				sun.css("transition", "all 1s");
			}, 10);
			cloud.css(
				"filter",
				"brightness(200%) drop-shadow(0 0 10px rgba(255, 255, 255, 1))"
			);
			cloud.css("mix-blend-mode", "normal");
			rain.css("mix-blend-mode", "normal");
		} else {
			moon.css("opacity", "1");
			sun.css("opacity", "0");
			const adjustedHour = hour < 7 ? hour + 24 : hour;
			const rotation = -90 + (adjustedHour - 6) * (180 / 8);
			moon.css("transform", "rotate(" + rotation + "deg)");
			background.css("opacity", "0");
			backgroundNight.css("opacity", "1");
			$(".hour").css("filter", "invert(100%)");
			$(".cardInfo").css("filter", "invert(100%)");
			sun.css("transition", "all 0s");
			setTimeout(function () {
				moon.css("transition", "all 1s");
			}, 10);
			cloud.css(
				"filter",
				"brightness(0%) drop-shadow(0 0 10px rgba(255, 255, 255, 1))"
			);
			cloud.css("mix-blend-mode", "multiply");
			rain.css("mix-blend-mode", "soft-light");
		}
	}

	// Function to handle scroll and wheel events
	function handleScrollEvent() {
		const sl = hoursContainer.scrollLeft();
		const hourIndex = Math.round(sl / hours.outerWidth());
		const currentHour = hours.eq(hourIndex);

		toggleSunMoon(parseInt(currentHour.data("hour")));
		highlightHour(hourIndex);
		updateWeatherAndTemperature(currentHour);
	}

	// Function to highlight the selected hour
	function highlightHour(index) {
		hours.removeClass("active"); // Remove active class from all hours
		hours.eq(index).addClass("active"); // Add active class to the selected hour
	}

	function updateWeatherAndTemperature(currentHour) {
		const temperature = currentHour.data("temp");
		const weather = currentHour.data("weather");
		const day = currentHour.data("day");

		temperatureDisplay.text(temperature);
		weatherTypeDisplay.text(weather.replace(/-/g, " "));

		// Reset elements to default state
		rain.css("opacity", "0");
		snow.css("opacity", "0");
		cloud.css("opacity", "0");
		thunderstorm.css("opacity", "0");
		background.css("filter", "none");
		sun.css("filter", "none");
		moon.css("filter", "none");

		// Handle weather visibility and background filters
		if (weather === "rainy") {
			rain.css("opacity", "1");
			cloud.css("opacity", "0.8");
			background.css("filter", "grayscale(0.5) brightness(0.5)");
			moon.css("filter", "brightness(0.8)");
		} else if (weather === "snowy") {
			snow.css("opacity", "1");
			cloud.css("opacity", "0");
			background.css("filter", "grayscale(0.5) opacity(0.4)");
			sun.css("filter", "grayscale(0.9)");
		} else if (weather === "cloudy") {
			cloud.css("opacity", "0.9");
			background.css("filter", "grayscale(0.5) brightness(0.5)");
			moon.css("filter", "brightness(0.8)");
		} else if (weather === "thunderstorm") {
			cloud.css("opacity", "0.8");
			thunderstorm.css("opacity", "1");
			background.css("filter", "grayscale(1) brightness(0.1)");
			sun.css("filter", "grayscale(0.9)");
		} else if (weather === "partly-cloudy" || weather === "partly-cloudy-night") {
			cloud.css("opacity", "0.5");
		}

		// Handle day text update
		if (day === "tom") {
			currentDay.text("Tomorrow");
		} else {
			currentDay.text("Today");
		}
	}

	// Initial setup for the first hour
	function init() {
		toggleSunMoon(initialHour); // Toggle sun/moon for initial position (07:00)
		highlightHour(initialHour); // Highlight the first hour initially
		updateWeatherAndTemperature(hours.eq(2));
	}

	// Function to generate drops
	function createRain() {
		const nbDrop = 800;
		for (let i = 1; i <= nbDrop; i++) {
			const dropLeft = randRange(0, 1600);
			const dropTop = randRange(-1000, 1400);

			rain.append('<div class="drop" id="drop' + i + '"></div>');
			$("#drop" + i).css({ left: dropLeft, top: dropTop });
		}
	}

	// Function to generate a random number range
	function randRange(minNum, maxNum) {
		return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	}

	// Event listeners
	hoursContainer.on("scroll", handleScrollEvent);
	hoursContainer.on("wheel", function (event) {
		event.preventDefault(); // Prevent default scrolling behavior
		hoursContainer.scrollLeft(
			hoursContainer.scrollLeft() + event.originalEvent.deltaY
		);
		handleScrollEvent();
	});
	hours.on("click", function () {
		const hour = parseInt($(this).data("hour"));
		toggleSunMoon(hour);
		highlightHour(hours.index(this));
		updateWeatherAndTemperature($(this));
	});

	// Make it rain
	createRain();
	init();
	hoursContainer.scrollLeft(81 * initialHour);
});

function setRandomLightningDuration() {
	const lightning = document.getElementById("thunderstorm");
	const minDuration = 1; // minimum duration in seconds
	const maxDuration = 4; // maximum duration in seconds
	const randomDuration =
		Math.random() * (maxDuration - minDuration) + minDuration;
	thunderstorm.style.setProperty("--lightning-duration", `${randomDuration}s`);
}

// Set an initial random duration
setRandomLightningDuration();

// Change the duration periodically
setInterval(setRandomLightningDuration, 5000); // Change every 5 seconds

particlesJS("cloud", {
	particles: {
		number: { value: 5, density: { enable: true, value_area: 100 } },
		color: { value: "#ffffff" },
		shape: {
			type: "image",
			stroke: { width: 2, color: "#00ffff" },
			polygon: { nb_sides: 5 },
			image: {
				src: "https://i.ibb.co/vzP35N4/fluffyvloud.png",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 10,
				opacity_min: 0.0081,
				sync: false
			}
		},
		size: {
			value: 800,
			random: false,
			anim: { enable: true, speed: 10, size_min: 2, sync: false }
		},
		line_linked: {
			enable: false,
			distance: 0,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: "left",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 60, rotateY: 120 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: false, mode: "bubble" },
			onclick: { enable: false, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 0, line_linked: { opacity: 1 } },
			bubble: {
				distance: 0,
				size: 2,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});

// Adjust initial positions of the particles
function adjustInitialPositions() {
	const particlesArray = window.pJSDom[0].pJS.particles.array;
	particlesArray.forEach((p) => {
		p.x = Math.random() * window.innerWidth;
		p.y = Math.random() * window.innerHeight;
	});
}

// Wait until particles are initialized and then adjust positions
setTimeout(adjustInitialPositions, 1000);

particlesJS("snow", {
	particles: {
		number: {
			value: 2000,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#fff"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 5
			}
		},
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 2,
			random: true,
			anim: {
				enable: false
			}
		},
		line_linked: {
			enable: false
		},
		move: {
			enable: true,
			speed: 3,
			direction: "bottom",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	retina_detect: true
});

var canvas = $("#rain")[0];

if (canvas.getContext) {
	var ctx = canvas.getContext("2d");
	var w = canvas.width;
	var h = canvas.height;
	ctx.strokeStyle = "rgba(255,255,255,0.5)";
	ctx.lineWidth = 1;
	ctx.lineCap = "round";

	var init = [];
	var maxParts = 300;
	for (var a = 0; a < maxParts; a++) {
		init.push({
			x: Math.random() * w,
			y: Math.random() * h,
			l: Math.random() * 1,
			xs: -4 + Math.random() * 4 + 2,
			ys: Math.random() * 10 + 10
		});
	}

	var particles = [];
	for (var b = 0; b < maxParts; b++) {
		particles[b] = init[b];
	}

	function draw() {
		ctx.clearRect(0, 0, w, h);
		for (var c = 0; c < particles.length; c++) {
			var p = particles[c];
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
			ctx.stroke();
		}
		move();
	}

	function move() {
		for (var b = 0; b < particles.length; b++) {
			var p = particles[b];
			p.x += p.xs;
			p.y += p.ys;
			if (p.x > w || p.y > h) {
				p.x = Math.random() * w;
				p.y = -20;
			}
		}
	}

	setInterval(draw, 3);
}