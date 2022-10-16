import sys
import pandas as pd
from IPython import embed
import requests
import json


path_cities_activities_spots = '../data/cities_activities_spots.csv'
path_activities_items = '../data/cities_activities_spots.csv'


def get_city_activities(city):    
    df_cities_activities_spots = pd.read_csv(path_cities_activities_spots)

    return df_cities_activities_spots[
        df_cities_activities_spots["city"] == city
    ]["activity"]


def get_city_activity_spots(city, activity):
    df_activities_items = pd.read_csv(path_activities_items)

    return df_activities_items.loc[
        (df_activities_items['city'] == city) &
        (df_activities_items['activity'] == activity) ,['spots']
    ]

def get_weather_data(latitude, longitude):
    ENDPOINT = 'https://api.windy.com/api/point-forecast/v2'
    API_KEY_POINT_FORECAST = "LUGALU83hUW5bBFc8NPUvuYXg6f17Ly0"
    API_KEY_MAP_FORECAST = "mkMRAk6zjf9ZdrlWKejRLAzqhe5HI73g"
    HEADERS = {'Content-Type': 'application/json'}
    LAT = 51.178
    LON = 115.571
    DATA = {
        "lat": LAT,
        "lon": LON,
        "model": "gfs",
        "parameters": ["temp", "precip", "wind", "ptype", "snowPrecip", "waves"],
        "levels": ["surface"],
        "key": API_KEY_POINT_FORECAST
      }
    point_forecast_response =  requests.post(ENDPOINT, json=DATA, headers=HEADERS)
    return json.loads(point_forecast_response.text)
    
if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit('Enter command line input: return-value input-value')
    else:
        return_value = sys.argv[1]
        first_input_value = sys.argv[2]

        if return_value == 'activities':
            activities_returned = get_city_activities(first_input_value)
        elif return_value == 'spots' and len(sys.argv) == 4:
            spots_returned = get_city_activity_spots(first_input_value, sys.argv[3])
        elif return_value == 'weather' and len(sys.argv) == 4:
            weather_returned = get_weather_data(float(first_input_value), longitude=float(sys.argv[3]))
            #embed()