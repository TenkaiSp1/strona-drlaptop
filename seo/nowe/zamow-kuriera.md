# Nowa podstrona `/zamow-kuriera/`

**Nowy adres:** `https://drlaptop.pl/zamow-kuriera/`

To strona docelowa pomarańczowego przycisku **„📦 Zamów kuriera”** w menu, na pasku na dole ekranu w telefonie i na wszystkich podstronach usług i marek.

| Pole w Yoast | Wartość |
|---|---|
| Fraza kluczowa | serwis laptopów kurier |
| Tytuł SEO | Serwis laptopów z kurierem – cała Polska \| drLAPTOP |
| Opis meta | Kurier odbierze laptopa z domu lub nadasz go w Paczkomacie. Diagnoza, wycena przed naprawą, zwrot kurierem z gwarancją. |

**Przed publikacją ustalić:**
- [ ] cenę kuriera w obie strony (i czy jest darmowy od jakiejś kwoty naprawy),
- [ ] kwotę ubezpieczenia przesyłki,
- [ ] formy płatności przed odesłaniem (przelew, BLIK, link do płatności),
- [ ] czy laptop odsyłamy, jeśli klient nie zgodzi się na naprawę (i za ile),
- [ ] **regulamin serwisu wysyłkowego** sprawdzony przez prawnika. Umowa zawierana na odległość z klientem indywidualnym podlega przepisom o prawach konsumenta (m.in. prawo odstąpienia od umowy w ciągu 14 dni i jego utrata po wykonaniu usługi za zgodą klienta).

---

## Treść do wklejenia w Elementorze

### [H1] Serwis laptopów z kurierem – z całej Polski

Nie musisz szukać serwisu w swojej okolicy. Zamów kuriera, a odbierzemy Twojego laptopa spod wskazanego adresu albo nadasz go w Paczkomacie InPost. Po diagnozie zadzwonimy z wyceną, a po naprawie laptop wróci do Ciebie kurierem, razem z pisemną gwarancją. Naprawiamy w naszym serwisie w Gdyni.

*[Przycisk: 📦 Wypełnij formularz (przewija do formularza)]*

### [H2] Jak to działa

1. **Zamawiasz kuriera.** Wypełniasz formularz poniżej (1 minuta). Dostajesz SMS i e-mail z numerem zlecenia oraz etykietą albo kodem nadania.
2. **Pakujesz i przekazujesz laptopa.** Kurier odbiera paczkę z domu lub z pracy, albo nadajesz ją w dowolnym Paczkomacie InPost.
3. **Diagnoza i wycena.** Zwykle w ciągu 24 godzin od dotarcia laptopa dzwonimy z informacją, co jest uszkodzone, ile kosztuje naprawa i ile potrwa. Nic nie naprawiamy bez Twojej zgody.
4. **Naprawa i test.** O postępach informujemy SMS-em.
5. **Płatność i zwrot.** Płacisz przelewem lub BLIK-iem, a laptop wraca kurierem albo do wybranego Paczkomatu.

### [H2] Ile to kosztuje

| | Cena |
|---|---|
| Kurier do serwisu i z powrotem | … zł |
| Kurier przy naprawie powyżej … zł | **0 zł** *(opcjonalnie)* |
| Diagnoza przy naprawie | 0 zł |
| Ubezpieczenie przesyłki | w cenie, do … zł |

Ceny napraw: [Cennik](/cennik/).

### [H2] Formularz zamówienia kuriera

*[Formularz: Fluent Forms / Gravity Forms, specyfikacja pól niżej]*

### [H2] Jak zapakować laptopa

- Zapakuj laptopa w **karton** (najlepiej oryginalny), nie w kopertę.
- Owiń laptopa folią bąbelkową i wypełnij wolne miejsce, żeby nie przesuwał się w środku.
- **Dołącz ładowarkę**, jeśli problem dotyczy ładowania albo baterii. W innych przypadkach ładowarka nie jest potrzebna.
- Wyjmij pendrive'y, karty pamięci i płyty.
- Do paczki włóż kartkę z numerem zlecenia (z SMS-a lub e-maila).
- **Laptop po zalaniu:** nie włączaj go, nie ładuj i wyślij jak najszybciej.

### [H2] Zanim wyślesz laptopa

- **Zrób kopię ważnych danych**, jeśli laptop się jeszcze uruchamia. Nie przeglądamy plików klientów, ale przy niektórych naprawach (np. wymiana dysku) dane mogą zostać utracone.
- **Hasło do Windowsa lub konta Mac** podaj w formularzu albo utwórz tymczasowe konto. Bez niego nie przetestujemy laptopa po naprawie.
- **MacBook:** wyloguj się z iCloud albo podaj nam hasło do konta użytkownika.

### [H2] Najczęstsze pytania

**Skąd odbieracie laptopy?**
Z całej Polski. W Trójmieście możesz też oddać laptopa osobiście w serwisie w Gdyni albo w punktach przyjęć w Gdańsku i Redzie.

**Ile trwa cała naprawa z wysyłką?**
Przesyłka w jedną stronę trwa zwykle 1–2 dni robocze. Sama naprawa najczęściej 1–3 dni robocze, a naprawy płyty głównej do 7 dni.

**Co, jeśli nie zgodzę się na naprawę?**
Odeślemy laptopa. Pobieramy wtedy opłatę za diagnozę (… zł) oraz koszt odesłania.

**Czy przesyłka jest ubezpieczona?**
Tak, do kwoty … zł. Dzięki dobremu zapakowaniu ryzyko uszkodzenia jest minimalne.

**Jak zapłacę za naprawę?**
Przelewem lub BLIK-iem po naprawie, przed odesłaniem laptopa. Fakturę wysyłamy e-mailem.

**Czy mogę śledzić status naprawy?**
Tak. Wysyłamy SMS przy każdej zmianie statusu: przyjęcie, diagnoza, naprawa, wysyłka.

*[Przyciski na końcu: 📦 Wypełnij formularz · 📞 Zadzwoń 58 500 55 10]*

**Linki wewnętrzne:** [Cennik](/cennik/) · [Laptopy gamingowe](/serwis-laptopow-gamingowych/) · [Serwis MacBook](/apple/) · [Naprawa po zalaniu](/czyszczeniu-po-zalaniu/) · [Regulamin serwisu](/regulamin/)

---

## Specyfikacja formularza (dla osoby wdrażającej)

| Pole | Typ | Wymagane | Uwagi |
|---|---|---|---|
| Sposób nadania | wybór: „Kurier odbiera z adresu” / „Nadam w Paczkomacie InPost” | tak | |
| Imię i nazwisko | tekst | tak | `autocomplete="name"` |
| Telefon | tel | tak | do SMS-ów o statusie |
| E-mail | e-mail | tak | etykieta i potwierdzenie |
| Adres odbioru | ulica, kod, miasto | tak przy kurierze | `autocomplete="street-address"` |
| Paczkomat zwrotny | wybór z mapy InPost (widget Geowidget) | tak przy Paczkomacie | |
| Preferowana data odbioru | data | nie | najbliższy dzień roboczy domyślnie |
| Urządzenie | wybór: laptop gamingowy / MacBook / laptop biznesowy / inny laptop / komputer PC | tak | |
| Marka i model | tekst | nie | np. „ASUS ROG Strix G15” |
| Opis usterki | pole tekstowe | tak | podpowiedź: „np. przegrzewa się i wyłącza w grach” |
| Hasło do systemu | tekst | nie | informacja, że można podać telefonicznie |
| Faktura na firmę | pole wyboru + NIP | nie | |
| Zgoda na regulamin serwisu | pole wyboru | tak | link do regulaminu |
| Zgoda RODO | pole wyboru | tak | |

**Po wysłaniu formularza (automatyzacja):**
1. Utworzenie przesyłki przez **Furgonetkę, Apaczkę lub BaseLinkera** (InPost, DPD, DHL). Nadawcą jest klient, odbiorcą serwis w Gdyni. *Przed wdrożeniem sprawdzić w API wybranego pośrednika, czy obsługuje zamówienie odbioru u klienta jako nadawcy.*
2. Utworzenie zlecenia serwisowego w **Subiekcie** (przez BaseLinkera albo interfejs Sfera).
3. SMS i e-mail do klienta: numer zlecenia + etykieta lub kod nadania + instrukcja pakowania.
4. Powiadomienie e-mail do serwisu.
5. Zmiany statusu w Subiekcie → automatyczny SMS do klienta.
6. Po naprawie: link do płatności (np. Przelewy24, PayU), a po zaksięgowaniu etykieta zwrotna.

**Pomiar:** wysłanie formularza ustawić w GA4 / GTM jako konwersję „zamowienie_kuriera”.

---

## Dane strukturalne dla tej podstrony

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://drlaptop.pl/zamow-kuriera/#service",
      "name": "Serwis laptopów z kurierem z całej Polski",
      "serviceType": "Naprawa laptopów wysyłkowo",
      "provider": {"@id": "https://drlaptop.pl/#serwis"},
      "areaServed": {"@type": "Country", "name": "Polska"},
      "url": "https://drlaptop.pl/zamow-kuriera/",
      "offers": {"@type": "Offer", "name": "Kurier do serwisu i z powrotem", "price": "…", "priceCurrency": "PLN"}
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Skąd odbieracie laptopy?", "acceptedAnswer": {"@type": "Answer", "text": "Z całej Polski. W Trójmieście możesz też oddać laptopa osobiście w serwisie w Gdyni albo w punktach przyjęć w Gdańsku i Redzie."}},
        {"@type": "Question", "name": "Ile trwa cała naprawa z wysyłką?", "acceptedAnswer": {"@type": "Answer", "text": "Przesyłka w jedną stronę trwa zwykle 1–2 dni robocze. Sama naprawa najczęściej 1–3 dni robocze, a naprawy płyty głównej do 7 dni."}},
        {"@type": "Question", "name": "Czy mogę śledzić status naprawy?", "acceptedAnswer": {"@type": "Answer", "text": "Tak. Wysyłamy SMS przy każdej zmianie statusu: przyjęcie, diagnoza, naprawa, wysyłka."}}
      ]
    }
  ]
}
</script>
```
