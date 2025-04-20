import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator, Alert, StyleSheet } from 'react-native';

const weatherImages = {
    0: require('../assets/tut4_weather_pics/clear.png'),
    1: require('../assets/tut4_weather_pics/light-cloud.png'),
    2: require('../assets/tut4_weather_pics/cloudy.jpg'),
    3: require('../assets/tut4_weather_pics/heavy-cloud.png'),
    51: require('../assets/tut4_weather_pics/hail.png'),
    53: require('../assets/tut4_weather_pics/hail.png'),
    55: require('../assets/tut4_weather_pics/hail.png'),
    56: require('../assets/tut4_weather_pics/sleet.png'),
    57: require('../assets/tut4_weather_pics/sleet.png'),
    61: require('../assets/tut4_weather_pics/light-rain.png'),
    63: require('../assets/tut4_weather_pics/showers.png'),
    65: require('../assets/tut4_weather_pics/heavy-rain.png'),
    66: require('../assets/tut4_weather_pics/sleet.png'),
    67: require('../assets/tut4_weather_pics/sleet.png'),
    71: require('../assets/tut4_weather_pics/snow.png'),
    73: require('../assets/tut4_weather_pics/snow.png'),
    75: require('../assets/tut4_weather_pics/snow.png'),
    77: require('../assets/tut4_weather_pics/snow.png'),
    80: require('../assets/tut4_weather_pics/showers.png'),
    81: require('../assets/tut4_weather_pics/showers.png'),
    82: require('../assets/tut4_weather_pics/showers.png'),
    85: require('../assets/tut4_weather_pics/sleet.png'),
    86: require('../assets/tut4_weather_pics/sleet.png'),
    95: require('../assets/tut4_weather_pics/thunder.png'),
    96: require('../assets/tut4_weather_pics/thunder.png'),
    99: require('../assets/tut4_weather_pics/thunder.png'),
};

const WeatherApp = () => {
    const [city, setCity] = useState('Hanoi');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cityName, setCityName] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');

    const fetchWeather = async () => {
        if (!city.trim()) {
            Alert.alert('Error', 'Please enter a city name');
            return;
        }

        setLoading(true);

        try {
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            const geoData = await geoResponse.json();

            if (!geoData.results || geoData.results.length === 0) {
                Alert.alert('Error', 'City not found');
                setLoading(false);
                return;
            }

            const { latitude, longitude, name } = geoData.results[0];
            setCityName(name);

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
            );
            const weatherData = await weatherResponse.json();

            setWeather(weatherData.current_weather);

            const weatherDescriptionResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
            );
            const weatherDescriptionData = await weatherDescriptionResponse.json();

            setWeatherDescription(weatherDescriptionData.current_weather.weathercode_description);
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground
            source={weather ? weatherImages[weather.weathercode] : require('../assets/tut4_weather_pics/clear.png')}
            style={styles.container}
        >
            {loading && <ActivityIndicator size="large" color="#0000ff" />}

            {weather && (
                <View style={styles.weatherContainer}>
                    <Text style={styles.cityText}>{cityName}</Text>
                    <Text style={styles.weatherText}>{weatherDescription}</Text>
                    <Text style={styles.weatherText}>Temperature: {weather.temperature}°C</Text>
                </View>
            )}
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Get Weather" onPress={fetchWeather} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    weatherContainer: {
        alignItems: 'center'
    },
    cityText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    weatherText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 20
    },
});

export default WeatherApp;
