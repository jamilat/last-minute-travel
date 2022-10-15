import sys
import pandas as pd


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
    

