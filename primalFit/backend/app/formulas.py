
# weight in kg, height in cm
def calculate_bmr(weight, height, age, is_male):
    if is_male:
        bmr = 88.362 + (13.397 *float(weight)) + (4.799 * float(height)) - (5.677 * float(age))
    else:
        bmr = 655 + (4.3 * float(weight)) + (4.7 * float(height)) - (4.7 * float(age))
    return bmr

def calculate_daily_calories(bmr, activity_level):
    if activity_level == 0:
        calories = bmr * 1.2
    elif activity_level == 1:
        calories = bmr * 1.375
    elif activity_level == 2:
        calories = bmr * 1.55
    elif activity_level == 3:
        calories = bmr * 1.725
    protein = calories/18
    carbohydates = calories/4 * .5
    return int(calories), int(protein), int(carbohydates)