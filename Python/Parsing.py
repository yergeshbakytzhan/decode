import requests
from bs4 import BeautifulSoup

URL = 'https://www.meloman.kz/fiction/modern-prose/'
HEADERS = {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.111 YaBrowser/21.2.1.107 Yowser/2.5 Safari/537.36', 'accept': '*/*'}

def get_html(url, params=None):
    r = requests.get(url, headers = HEADERS, params=params)
    return r 

def get_pages_count(html):
    soup = BeautifulSoup(html, 'html.parser')
    pagenation = soup.find_all('a', class_='page')
    if pagenation:
        return int(pagenation[-1].get_text())
    else:
        return 1
    print(pagenation)


def get_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    items = soup.find_all('div', class_='product-item-info')
    
    products = []

    for item in items:
        get_img = item.find('img', class_='product-image-photo')
        discount = item.find('span', class_='astrio-overlay-discount-percent__percent')
        if discount:
            discount = 'Discount'
        else:
            discount = 'No discount'
        products.append({
            'title': item.find('a', class_='product-item-link').get_text(strip=True),
            'image': get_img['data-src'],
            'type': item.find('span', class_='product-item__stock-label').get_text(strip=True),
            'price': item.find('span', class_='price').get_text(strip=True).replace('\xa0',' '),
            'discount': discount
        })
    print(len(products))
    print(products)

def parse():
    print('aaaa')
    html = get_html(URL)
    if html.status_code == 200:
        pages_count = get_pages_count(html.text)
        print(pages_count)
        # get_content(html.text)
    else:
        print('Error')
parse()