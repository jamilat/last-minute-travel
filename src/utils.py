import sys
import pandas as pd

def get_city_activities(city):    
    df = pd.read_csv('../data/cities_activities_spots.csv')
    return df[df["city"] == city]["activity"]
def get_city_activity_spots(city, activity):
    df = pd.read_csv('../data/cities_activities_spots.csv')
    return df.loc[(df['city']== city) & (df['activity']== activity) ,['spots']]

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
    

