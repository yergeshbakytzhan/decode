from tkinter import *
import requests

#KEY : 0ef110513a465806778ce557ccfd6bbe
#URL : api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


def get_weather():
    city = cityField.get()
    key = '0ef110513a465806778ce557ccfd6bbe'
    url = 'http://api.openweathermap.org/data/2.5/weather'
    params = {'APPID': key, 'q': city, 'units':'imperial'}
    result = requests.get(url, params=params)
    weather = result.json()
    info['text'] = f'{str(weather["name"])}: {weather["main"]["temp"]}'


root = Tk()

root['bg'] = '#fafafa'
root.title('Weather')
root.geometry('300x250')

root.resizable(width=False, height=False)

frame_top = Frame(root, bg='#181818', bd = 5)
frame_top.place(relx=0.15, rely=0.15, relwidth=0.7, relheight=0.25)

frame_bottom = Frame(root, bg='#181818', bd=5)
frame_bottom.place(relx=0.15, rely=0.55, relwidth=0.7, relheight=0.1)

cityField = Entry(frame_top, bg='#ffffff', font=30)
cityField.pack()

btn = Button(frame_top, text='See weather', command=get_weather)
btn.pack()

info = Label(frame_bottom, text='Weather info', bg='#ffb700', font=40)
info.pack()

root.mainloop()