# Audyt drlaptop.pl (05.11.2026)

## Mocne strony
- Ok. 40 podstron usług (marki: Apple, ASUS, Dell, HP, Acer, Lenovo, MSI, Samsung; Gdynia, Reda; FAQ).
- 34 wpisy na blogu, w tym przypadki z praktyki.
- Yoast SEO, mapa strony, robots.txt, HTTPS, podstawowe dane `LocalBusiness`.

## Problemy (od najważniejszych)
1. **Niespójne dane kontaktowe**: w stopce widać 58 500 55 60, link dzwoni na 55 10. Godziny w Gdyni: 8–16 (kontakt) i 9–17 (strona główna, dane strukturalne).
2. **Punkty partnerskie (Gdańsk, Reda) opisane jako oddziały** w danych strukturalnych. Mapa w kontakcie pokazuje wizytówkę „drLAPTOP – Serwis Laptopów Gdańsk”, co przy ladzie partnera łamie zasady Google.
3. **Brak cennika** na wszystkich podstronach usług.
4. **Przeoptymalizowany tekst** na stronie głównej („serwis komputerowy Gdańsk” kilkanaście razy, literówka „komputerów Gdański”).
5. **Puste i zepsute podstrony**: `/sklep/` (pusta), `/evercompare/` (surowy kod `[evercompare_table]`), `/darmowa-diagnoza-online/`, `/pomoc-zdalna-natychmiast/`, `/uslugi-specjalistyczne/`, `/zabezpieczenia-monitoring-alarmy/` (za mało treści).
6. **Szybkość na telefonie**: PageSpeed 68, największy element ładuje się w 11,6 s.
   - Przyczyna: tło górnej sekcji (`drlp_zdalna_pomoc.webp`, 190 KB) z efektem ruchu w Elementorze ładuje się dopiero po skrypcie Elementora.
   - Tła sekcji w pełnej rozdzielczości 2560 px, po 330–480 KB każde.
   - 30 plików CSS, 15 skryptów, 3 rodziny czcionek (Inter we wszystkich grubościach).
   - 36 z 53 zdjęć bez opisu alt.
7. **Nieaktualne treści**: ostatni wpis na blogu z 06.2025, „Windows 10 Pro” w opisach laptopów, wpis o Windows XP, „© 2025”.
8. **Brak przycisków „Cennik” i „Zamów kuriera”** w menu.
9. Podstrona „Regeneracja baterii”: lepiej „Wymiana baterii”.
