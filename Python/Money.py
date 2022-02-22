import requests
from bs4 import BeautifulSoup

DOLLAR_RUB = 'https://www.google.kz/search?source=hp&ei=jPQ9YNWBIaaNlwThpouYCA&iflsig=AINFCbYAAAAAYD4CnHn00JJdZsBzF0511XqDlTjlFMLV&q=доллар+к+рублю&oq=доллар+к+рублю&gs_lcp=Cgdnd3Mtd2l6EAMyDQgAELEDEIMBEEYQggIyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUILhCxAzoOCAAQsQMQgwEQxwEQowI6BQgAELEDOgIILjoICC4QsQMQgwE6CwgAELEDEMcBEKMCOgQIABAKUNYPWKw7YPE8aANwAHgAgAGAAYgBxAySAQQwLjE0mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwjV95XmlZHvAhWmxoUKHWHTAoMQ4dUDCAc&uact=5'
headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.111 Safari/537.36'}


full_page = requests.get(DOLLAR_RUB,headers=headers)

soup = BeautifulSoup(full_page,'html.parser')

convert = soup.findAll("span",{"class":"DFlfde"})
print(convert)